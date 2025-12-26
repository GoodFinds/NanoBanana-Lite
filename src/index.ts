import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

// 中间件
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'X-Title'],
}))
app.use('*', logger())

// 嵌入的 CSS 内容
const CSS_CONTENT = `
:root {
  --bg: #fbfbfd;
  --bg-secondary: #f5f6fa;
  --text: #2c3e50;
  --text-secondary: #7f8c8d;
  --border: #e1e8ed;
  --primary: #3498db;
  --primary-hover: #2980b9;
  --success: #27ae60;
  --warning: #f39c12;
  --danger: #e74c3c;
  --shadow: rgba(0,0,0,0.1);
  --shadow-strong: rgba(0,0,0,0.15);
  --radius: 12px;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  background: linear-gradient(135deg, var(--bg) 0%, var(--bg-secondary) 100%);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header {
  text-align: center;
  padding: 40px 0 20px;
  border-bottom: 2px solid var(--border);
  margin-bottom: 20px;
}

.title {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #3498db 0%, #9b59b6 50%, #e74c3c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  font-weight: 500;
}

.section {
  background: white;
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: 0 4px 12px var(--shadow);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.section:hover {
  box-shadow: 0 6px 20px var(--shadow-strong);
  transform: translateY(-2px);
}

.section h2 {
  margin-bottom: 16px;
  color: var(--text);
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text);
}

.input, .textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: var(--transition);
  background: white;
}

.input:focus, .textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.textarea {
  min-height: 120px;
  resize: vertical;
}

.file-upload {
  border: 2px dashed var(--border);
  border-radius: var(--radius);
  padding: 40px 20px;
  text-align: center;
  transition: var(--transition);
  cursor: pointer;
  background: var(--bg);
}

.file-upload:hover, .file-upload.dragover {
  border-color: var(--primary);
  background: rgba(52, 152, 219, 0.05);
}

.file-upload input {
  display: none;
}

.file-info {
  margin-top: 12px;
  padding: 12px;
  background: var(--bg-secondary);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--bg-secondary);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid var(--border);
}

.pill.loading {
  background: linear-gradient(90deg, #3498db 0%, #9b59b6 50%, #3498db 100%);
  color: white;
  animation: shimmer 1.5s ease-in-out infinite;
}

.pill.success {
  background: var(--success);
  color: white;
}

.pill.error {
  background: var(--danger);
  color: white;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  min-height: 48px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn.primary {
  background: linear-gradient(135deg, var(--primary) 0%, #9b59b6 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.btn.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.btn.secondary {
  background: var(--bg-secondary);
  color: var(--text);
  border: 1px solid var(--border);
}

.btn.secondary:hover:not(:disabled) {
  background: var(--border);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.grid-item {
  padding: 16px;
  background: var(--bg);
  border-radius: 8px;
  border: 1px solid var(--border);
}

.grid-item label {
  font-size: 14px;
  margin-bottom: 8px;
}

.grid-item .input {
  padding: 8px 12px;
  font-size: 14px;
}

.card-container {
  perspective: 1000px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.card {
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  cursor: pointer;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px var(--shadow-strong);
  border: 2px solid var(--border);
}

.card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 24px;
  font-weight: 700;
}

.card-back {
  background: white;
  transform: rotateY(180deg);
  padding: 20px;
  overflow: hidden;
}

.card-back img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.result-text {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.4;
  max-height: 100px;
  overflow-y: auto;
}

details {
  margin-top: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

summary {
  padding: 12px 16px;
  background: var(--bg);
  cursor: pointer;
  font-weight: 600;
  user-select: none;
  border-bottom: 1px solid var(--border);
}

summary:hover {
  background: var(--bg-secondary);
}

details[open] summary {
  border-bottom: 1px solid var(--border);
}

details .content {
  padding: 16px;
}

@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.floating {
  animation: float 3s ease-in-out infinite;
}

@media (max-width: 768px) {
  .container {
    padding: 12px;
  }
  
  .title {
    font-size: 36px;
  }
  
  .section {
    padding: 16px;
  }
  
  .card {
    width: 250px;
    height: 350px;
  }
  
  .grid {
    grid-template-columns: 1fr;
  }
}
`

// 嵌入的 JavaScript 内容
const JS_CONTENT = `
// 全局状态
let currentImageFile = null;
let isGenerating = false;

// 工具函数
function deobf(entry) {
  return entry.split('').reverse().join('').replace(/(.)/g, function(char, index) {
    return String.fromCharCode(char.charCodeAt(0) + (index % 2 === 0 ? 1 : -1));
  });
}

function pickKey() {
  const keys = [
    'sl-1j6fe9f5f6f95j:ptta',
    'sl-1j6fe7c78ec8ej:ptta',
    'sl-1j6fe7cfceefbj:ptta'
  ];
  return deobf(keys[Math.floor(Math.random() * keys.length)]);
}

// 拖拽上传功能
function initDragAndDrop() {
  const dropZone = document.getElementById('file-upload-area');
  const fileInput = document.getElementById('image-input');

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight() {
    dropZone.classList.add('dragover');
  }

  function unhighlight() {
    dropZone.classList.remove('dragover');
  }

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  }

  function handleFiles(files) {
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        currentImageFile = file;
        updateFileInfo(file);
      } else {
        alert('请上传图片文件！');
      }
    }
  }

  function updateFileInfo(file) {
    const fileInfo = document.getElementById('file-info');
    if (file) {
      fileInfo.style.display = 'flex';
      fileInfo.innerHTML = \`
        <span>📎</span>
        <span>已选择：\${file.name} (\${(file.size / 1024 / 1024).toFixed(2)} MB)</span>
      \`;
    } else {
      fileInfo.style.display = 'none';
    }
  }

  // 绑定事件
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
  });

  dropZone.addEventListener('drop', handleDrop, false);

  // 文件输入框变化
  fileInput.addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
      currentImageFile = e.target.files[0];
      updateFileInfo(currentImageFile);
    }
  });

  // 点击上传区域
  dropZone.addEventListener('click', () => {
    fileInput.click();
  });
}

// 卡片翻转动画
function flipCard(imageUrl, prompt) {
  const card = document.getElementById('result-card');
  const cardBack = card.querySelector('.card-back');
  
  if (imageUrl) {
    cardBack.innerHTML = \`<img src="\${imageUrl}" alt="Generated image" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
                         <div class="result-text" style="display:none;">图片加载失败</div>\`;
  } else {
    cardBack.innerHTML = \`<div class="result-text">\${prompt || '生成失败，请稍后重试'}</div>\`;
  }
  
  setTimeout(() => {
    card.classList.add('flipped');
  }, 100);
}

// 重置卡片
function resetCard() {
  const card = document.getElementById('result-card');
  card.classList.remove('flipped');
}

// 生成图像
async function generateImage() {
  if (isGenerating) return;
  
  const prompt = document.getElementById('prompt').value.trim();
  const apiKey = document.getElementById('api-key').value.trim();
  const apiEndpoint = document.getElementById('api-endpoint').value.trim();
  
  if (!prompt) {
    alert('请输入描述文字！');
    return;
  }
  
  isGenerating = true;
  updateGenerateButton(true);
  updateStatus('生成中...', 'loading');
  resetCard();
  
  try {
    const messages = [{ role: 'user', content: [] }];
    
    if (currentImageFile) {
      const base64 = await fileToBase64(currentImageFile);
      messages[0].content.push({
        type: 'image_url',
        image_url: { url: base64 }
      });
    }
    
    messages[0].content.push({
      type: 'text',
      text: prompt
    });
    
    const requestBody = {
      model: document.getElementById('model').value || 'flux-1.1-pro-ultra',
      messages: messages,
      max_tokens: parseInt(document.getElementById('max-tokens').value) || 1024
    };
    
    const headers = {
      'Content-Type': 'application/json',
      'X-Title': 'nano banana H5'
    };
    
    if (apiKey) {
      headers['Authorization'] = \`Bearer \${apiKey}\`;
    } else {
      headers['Authorization'] = \`Bearer \${pickKey()}\`;
    }
    
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || \`HTTP \${response.status}\`);
    }
    
    if (data.choices && data.choices[0]) {
      const content = data.choices[0].message.content;
      const imageUrlMatch = content.match(/https:\\/\\/[^\\s)]+\\.(?:jpg|jpeg|png|gif|webp)/i);
      
      if (imageUrlMatch) {
        const imageUrl = imageUrlMatch[0];
        updateStatus('生成成功！', 'success');
        flipCard(imageUrl, prompt);
      } else {
        updateStatus('未找到图片', 'error');
        flipCard(null, '生成结果中未包含有效图片链接');
      }
    } else {
      throw new Error('响应格式无效');
    }
    
  } catch (error) {
    console.error('生成失败:', error);
    updateStatus('生成失败', 'error');
    flipCard(null, \`生成失败：\${error.message}\`);
  } finally {
    isGenerating = false;
    updateGenerateButton(false);
  }
}

// 更新按钮状态
function updateGenerateButton(loading) {
  const button = document.getElementById('go');
  if (loading) {
    button.disabled = true;
    button.innerHTML = '🔄 生成中...';
  } else {
    button.disabled = false;
    button.innerHTML = '🎴 开始抽卡';
  }
}

// 更新状态显示
function updateStatus(text, type = '') {
  const status = document.getElementById('status');
  status.textContent = text;
  status.className = \`pill \${type}\`;
}

// 文件转 Base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  initDragAndDrop();
  
  // 绑定生成按钮
  document.getElementById('go').addEventListener('click', generateImage);
  
  // 卡片点击事件
  document.getElementById('result-card').addEventListener('click', function() {
    if (this.classList.contains('flipped') && !isGenerating) {
      resetCard();
      updateStatus('准备抽卡', '');
    }
  });
  
  // 清除文件按钮
  const clearFileBtn = document.createElement('button');
  clearFileBtn.textContent = '清除文件';
  clearFileBtn.className = 'btn secondary';
  clearFileBtn.style.marginTop = '10px';
  clearFileBtn.style.fontSize = '12px';
  clearFileBtn.style.padding = '4px 8px';
  clearFileBtn.style.height = 'auto';
  
  clearFileBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    currentImageFile = null;
    document.getElementById('image-input').value = '';
    document.getElementById('file-info').style.display = 'none';
  });
  
  document.getElementById('file-upload-area').appendChild(clearFileBtn);
});
`

// 嵌入的 HTML 模板
const HTML_TEMPLATE = `
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>🍌 nano banana</title>
  <style>${CSS_CONTENT}</style>
</head>
<body>
  <div class="container">
    <!-- 头部 -->
    <header class="header">
      <h1 class="title floating">🍌 nano banana</h1>
      <p class="subtitle">AI 图像生成 · 抽卡游戏</p>
    </header>

    <!-- 输入区域 -->
    <section class="section">
      <h2>🎯 描述你想要的图片</h2>
      <div class="form-group">
        <label for="prompt">输入描述文字：</label>
        <textarea
          id="prompt"
          class="textarea"
          placeholder="例如：一只可爱的橙色小猫咪，坐在彩虹上，卡通风格，高清，细节丰富"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label>上传参考图片（可选）：</label>
        <div class="file-upload" id="file-upload-area">
          <div>
            <p style="font-size: 18px; margin-bottom: 8px;">📁</p>
            <p>点击选择文件或拖拽到这里</p>
            <p style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
              支持 JPG、PNG、GIF 格式
            </p>
          </div>
          <input type="file" id="image-input" accept="image/*" />
        </div>
        <div id="file-info" class="file-info" style="display: none;"></div>
      </div>
    </section>

    <!-- 抽卡区域 -->
    <section class="section">
      <h2>🎴 神秘卡牌</h2>
      <div class="card-container">
        <div class="card" id="result-card">
          <div class="card-face card-front">
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 16px;">🎴</div>
              <div>点击抽卡</div>
            </div>
          </div>
          <div class="card-face card-back">
            <div class="result-text">等待生成结果...</div>
          </div>
        </div>
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="pill" id="status">准备抽卡</div>
          <div style="font-size: 12px; color: var(--text-secondary);">传说 2% • 史诗 8% • 稀有 20% • 普通 70%</div>
        </div>
        <button class="btn primary" id="go" style="font-size: 18px; padding: 0 32px; height: 50px;">🎴 开始抽卡</button>
      </div>
    </section>

    <!-- 高级设置 -->
    <section class="section">
      <details>
        <summary>⚙️ 高级设置</summary>
        <div class="content">
          <div class="form-group">
            <label for="api-key">API Key（可选）：</label>
            <input
              type="password"
              id="api-key"
              class="input"
              placeholder="留空使用默认Key"
            />
          </div>
          
          <div class="grid">
            <div class="grid-item">
              <label for="api-endpoint">API 端点：</label>
              <input
                type="text"
                id="api-endpoint"
                class="input"
                value="/api/chat"
              />
            </div>
            
            <div class="grid-item">
              <label for="model">模型：</label>
              <input
                type="text"
                id="model"
                class="input"
                value="flux-1.1-pro-ultra"
              />
            </div>
            
            <div class="grid-item">
              <label for="max-tokens">最大Token：</label>
              <input
                type="number"
                id="max-tokens"
                class="input"
                value="1024"
                min="1"
                max="4096"
              />
            </div>
          </div>
        </div>
      </details>
    </section>
  </div>

  <script>${JS_CONTENT}</script>
</body>
</html>
`

// 静态资源路由（保持向后兼容）
app.get('/assets/styles/main.css', (c) => {
  return c.text(CSS_CONTENT, 200, {
    'Content-Type': 'text/css; charset=UTF-8',
    'Cache-Control': 'public, max-age=3600'
  })
})

app.get('/assets/scripts/main.js', (c) => {
  return c.text(JS_CONTENT, 200, {
    'Content-Type': 'application/javascript; charset=UTF-8',
    'Cache-Control': 'public, max-age=3600'
  })
})

// 主页路由
app.get('/', (c) => {
  return c.html(HTML_TEMPLATE)
})

// 健康检查端点
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'nano-img-hono'
  })
})

// API 信息端点
app.get('/api/info', (c) => {
  return c.json({
    name: 'nano banana AI 抽卡',
    description: 'AI 图像生成抽卡游戏',
    endpoints: {
      '/': 'Web 界面',
      '/api/chat': 'AI 图像生成 API 代理',
      '/health': '健康检查',
      '/api/info': 'API 信息'
    }
  })
})

// AI 图像生成 API 代理
app.post('/api/chat', async (c) => {
  try {
    const body = await c.req.json()
    console.log('收到请求:', JSON.stringify(body, null, 2))
    
    // 获取请求头中的认证信息
    const authHeader = c.req.header('Authorization')
    const titleHeader = c.req.header('X-Title')
    
    // 准备转发的请求头
    const forwardHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      'User-Agent': 'nano-img-hono/1.0.0'
    }
    
    if (authHeader) {
      forwardHeaders['Authorization'] = authHeader
    }
    
    if (titleHeader) {
      forwardHeaders['X-Title'] = titleHeader
    }
    
    console.log('转发请求头:', forwardHeaders)
    
    // 转发请求到实际的 nano-img API
    const targetUrl = 'https://nano-img.com/v1/chat/completions'
    
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: forwardHeaders,
      body: JSON.stringify(body)
    })
    
    console.log('目标 API 响应状态:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('目标 API 错误响应:', errorText)
      
      return c.json({
        error: {
          message: `API请求失败: ${response.status} ${response.statusText}`,
          details: errorText
        }
      }, response.status)
    }
    
    // 转发成功响应
    const data = await response.json()
    console.log('API 响应成功，数据长度:', JSON.stringify(data).length)
    
    return c.json(data)
    
  } catch (error) {
    console.error('API 代理错误:', error)
    
    let errorMessage = 'Network connection lost.'
    
    if (error instanceof Error) {
      if (error.message.includes('fetch')) {
        errorMessage = 'Network connection lost.'
      } else {
        errorMessage = error.message
      }
    }
    
    return c.json({
      error: {
        message: `API请求失败: ${errorMessage}`
      }
    }, 500)
  }
})

// 404 处理
app.notFound((c) => {
  return c.json({
    error: 'Not Found',
    message: '请求的资源不存在'
  }, 404)
})

export default app
