import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { cssContent } from './css-content'
import { htmlContent } from './html-content'

const app = new Hono()

// 中间件
app.use('*', cors({
  origin: ['*'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'X-Title'],
}))
app.use('*', logger())

// 静态CSS文件路由
app.get("/styles.css", async (c) => {
  return c.text(cssContent, 200, {
    "Content-Type": "text/css",
    "Cache-Control": "public, max-age=3600"
  })
})

app.get('/', async (c) => {
  try {
    // 将 HTML 中的 API 端点替换为我们的代理端点
    const modifiedHTML = htmlContent.replace(
      /https:\/\/nano\.tinyfind\.org/g,
      `${new URL(c.req.url).origin}`
    )
    return c.html(modifiedHTML)
  } catch (error) {
    console.error('Error serving homepage:', error)
    return c.text('Internal Server Error', 500)
  }
})

// 图像生成端点
app.post('/api/v1/image', async (c) => {
  try {
    // 获取请求头中的 title 参数
    const title = c.req.header('X-Title') || c.req.header('HTTP-Referer')
    
    if (!title) {
      return c.json({ error: 'Missing title in headers' }, 400)
    }

    console.log(`Generating image for title: ${title}`)

    // 调用远程 API
    const response = await fetch('https://nano.tinyfind.org/api/v1/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Title': title,
        'HTTP-Referer': title
      }
    })

    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText}`)
      return c.json({ error: 'Failed to generate image' }, response.status)
    }

    // 获取响应数据
    const imageData = await response.arrayBuffer()
    
    // 返回图像
    return new Response(imageData, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': imageData.byteLength.toString(),
      }
    })

  } catch (error) {
    console.error('Error in image generation:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

export default app
