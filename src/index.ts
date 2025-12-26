import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { htmlContent } from './html-content';
import { cssContent } from './css-content';

type Env = {
  [key: string]: string;
};

const app = new Hono<{ Bindings: Env }>();

// CORS 配置
app.use(
  '*',
  cors({
    origin: ['http://localhost:8791', 'https://*.workers.dev', '*'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
);

// 主页路由
app.get('/', (c) => {
  return c.html(htmlContent);
});

// CSS 样式路由
app.get('/styles.css', (c) => {
  return c.text(cssContent, 200, {
    'Content-Type': 'text/css',
  });
});

// Favicon路由
app.get('/favicon.ico', (c) => {
  return c.text('🍌', 200, {
    'Content-Type': 'text/plain',
  });
});

// 健康检查
app.get('/health', (c) => {
  return c.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});

// 解析SSE格式的响应
function parseSSEResponse(text: string): any[] {
  const lines = text.split('\n');
  const events = [];
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      try {
        const jsonStr = line.substring(6); // 移除 "data: " 前缀
        const data = JSON.parse(jsonStr);
        events.push(data);
      } catch (e) {
        // 忽略无法解析的行
      }
    }
  }
  
  return events;
}

// 图像生成 API - 返回图片二进制数据
app.post('/api/v1/image', async (c) => {
  try {
    // 从请求体中读取数据
    const body = await c.req.json().catch(() => ({}));
    const prompt = body.prompt || '';
    const model = body.model || 'nano-banana-fast'; // 默认使用快速版本
    const size = body.size || '1K';
    const aspect_ratio = body.aspect_ratio || '1:1';

    console.log('收到图像生成请求:', { 
      prompt: prompt.substring(0, 50) + '...',
      model,
      size,
      aspect_ratio
    });

    // 验证请求
    if (!prompt || prompt.trim() === '') {
      return c.json({ error: 'Missing prompt' }, 400);
    }

    // 准备API请求 - 使用GrsAI API
    const apiKey = 'sk-9568c79f97614b01bffa587134801be3';
    const endpoint = 'https://api.grsai.com/v1/draw/nano-banana';

    const requestBody = {
      model: model,
      prompt: prompt,
      size: size,
      aspect_ratio: aspect_ratio
    };

    console.log('发送到GrsAI API:', JSON.stringify(requestBody, null, 2));

    // 调用GrsAI API
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API 错误响应:', response.status, errorText);
      return c.json({ 
        error: 'Image generation failed', 
        details: errorText,
        status: response.status 
      }, 500);
    }

    // 读取流式响应
    const responseText = await response.text();
    console.log('API 原始响应:', responseText.substring(0, 200) + '...');

    // 解析SSE响应
    const events = parseSSEResponse(responseText);
    console.log('解析的事件数量:', events.length);

    // 找到最后一个成功的事件
    const finalEvent = events.find(event => event.status === 'succeeded' && event.results);
    
    if (finalEvent && finalEvent.results && finalEvent.results.length > 0) {
      const imageUrl = finalEvent.results[0].url;
      console.log('获取到图像URL:', imageUrl);
      
      // 下载图像并返回二进制数据
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch image: ${imageResponse.status}`);
      }
      
      const imageBuffer = await imageResponse.arrayBuffer();
      const contentType = imageResponse.headers.get('Content-Type') || 'image/png';
      
      console.log('图像下载成功，大小:', imageBuffer.byteLength, '字节');
      
      return c.body(imageBuffer, 200, {
        'Content-Type': contentType,
        'Content-Length': imageBuffer.byteLength.toString(),
      });
      
    } else {
      // 如果没有找到成功的结果，检查是否有失败信息
      const failedEvent = events.find(event => event.status === 'failed' || event.error);
      if (failedEvent) {
        return c.json({ 
          error: 'Image generation failed',
          details: failedEvent.error || failedEvent.failure_reason || 'Unknown error',
          task_id: failedEvent.id
        }, 500);
      }

      return c.json({ 
        error: 'No image generated',
        details: 'No successful result found in response',
        events: events.map(e => ({ status: e.status, progress: e.progress }))
      }, 500);
    }

  } catch (error) {
    console.error('图像生成错误:', error);
    return c.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : '未知错误' 
    }, 500);
  }
});

// 图像生成 API (JSON格式) - 用于外部API调用
app.post('/api/v1/image/json', async (c) => {
  try {
    // 从请求体中读取数据
    const body = await c.req.json().catch(() => ({}));
    const prompt = body.prompt || '';
    const model = body.model || 'nano-banana-fast';
    const size = body.size || '1K';
    const aspect_ratio = body.aspect_ratio || '1:1';

    // 验证请求
    if (!prompt || prompt.trim() === '') {
      return c.json({ error: 'Missing prompt' }, 400);
    }

    // 准备API请求
    const apiKey = 'sk-9568c79f97614b01bffa587134801be3';
    const endpoint = 'https://api.grsai.com/v1/draw/nano-banana';

    const requestBody = {
      model: model,
      prompt: prompt,
      size: size,
      aspect_ratio: aspect_ratio
    };

    // 调用GrsAI API
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return c.json({ 
        error: 'Image generation failed', 
        details: errorText,
        status: response.status 
      }, 500);
    }

    // 读取和解析响应
    const responseText = await response.text();
    const events = parseSSEResponse(responseText);
    const finalEvent = events.find(event => event.status === 'succeeded' && event.results);
    
    if (finalEvent && finalEvent.results && finalEvent.results.length > 0) {
      return c.json({
        success: true,
        images: finalEvent.results.map((item: any) => ({
          url: item.url,
          revised_prompt: prompt
        })),
        model: model,
        created: Math.floor(Date.now() / 1000),
        task_id: finalEvent.id
      });
    } else {
      const failedEvent = events.find(event => event.status === 'failed' || event.error);
      if (failedEvent) {
        return c.json({ 
          error: 'Image generation failed',
          details: failedEvent.error || failedEvent.failure_reason || 'Unknown error',
          task_id: failedEvent.id
        }, 500);
      }

      return c.json({ 
        error: 'No image generated',
        details: 'No successful result found in response'
      }, 500);
    }

  } catch (error) {
    console.error('图像生成错误:', error);
    return c.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : '未知错误' 
    }, 500);
  }
});

// 获取支持的模型列表
app.get('/api/v1/models', (c) => {
  return c.json({
    models: [
      {
        id: 'nano-banana-pro',
        name: 'Nano Banana Pro',
        description: 'Google第二代绘图模型，高质量，支持1K/2K/4K分辨率',
        cost: '1800积分/次'
      },
      {
        id: 'nano-banana-fast',
        name: 'Nano Banana Fast',
        description: '特价版本，速度快，性价比高',
        cost: '440积分/次'
      },
      {
        id: 'nano-banana',
        name: 'Nano Banana',
        description: '官方直连版本，图片编辑能力强',
        cost: '1400积分/次'
      }
    ],
    sizes: ['1K', '2K', '4K'],
    aspect_ratios: ['1:1', '2:3', '3:2', 'auto']
  });
});

export default app;
