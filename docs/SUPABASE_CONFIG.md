# Supabase 数据库配置指南

## ✅ 使用 Supabase URL（推荐方式）

**你的 Supabase URL**: `https://vitveshvmgesvrxxqcyh.supabase.co`

这是 **推荐的方式**，适合 Cloudflare Workers 环境。使用 HTTP API 而不是直接 PostgreSQL 连接。

### 配置步骤

1. **获取 Supabase 凭证**
   - 登录 [Supabase Dashboard](https://app.supabase.com)
   - 进入你的项目（项目 ID: `vitveshvmgesvrxxqcyh`）
   - 在 Settings > API 中获取：
     - `Project URL`: `https://vitveshvmgesvrxxqcyh.supabase.co` ✅
     - `anon public` key
     - `service_role` key

2. **设置环境变量**

   ```bash
   # 设置 Supabase URL
   echo "https://vitveshvmgesvrxxqcyh.supabase.co" | wrangler secret put SUPABASE_URL
   
   # 设置 Anon Key（从 Supabase Dashboard > Settings > API 获取）
   wrangler secret put SUPABASE_ANON_KEY
   
   # 设置 Service Role Key（如果需要服务端操作，绕过 RLS）
   wrangler secret put SUPABASE_SERVICE_ROLE_KEY
   ```

3. **在代码中使用**

   ```typescript
   import { createSupabaseClient } from './supabase';
   
   // 使用 anon key（受 RLS 限制）
   const supabase = createSupabaseClient(c.env);
   
   // 使用 service role key（绕过 RLS，用于服务端操作）
   const supabase = createSupabaseClient(c.env, true);
   
   // 查询数据
   const { data, error } = await supabase
     .from('your_table')
     .select('*');
   ```

## ⚠️ PostgreSQL 直连（不推荐用于 Cloudflare Workers）

你的 PostgreSQL 连接字符串：
```
postgresql://postgres.vitveshvmgesvrxxqcyh:[YOUR-PASSWORD]@aws-1-ap-south-1.pooler.supabase.com:5432/postgres
```

**注意**: Cloudflare Workers 环境**不支持**直接 PostgreSQL 连接，因为 Workers 只能使用 HTTP/HTTPS 请求。请使用上面的 Supabase URL 方式。

如果你在其他环境（如 Node.js 服务器）需要使用 PostgreSQL 直连，可以这样配置：

```bash
# 数据库主机
aws-1-ap-south-1.pooler.supabase.com

# 数据库用户
postgres.vitveshvmgesvrxxqcyh

# 数据库名称
postgres

# 数据库端口
5432

# 数据库密码（你之前提供的密码）
Q92bk0IvZhwp6UNG
```

## 如何判断密码类型？

1. **如果是 Service Role Key**:
   - 长度通常较长（50+ 字符）
   - 在 Supabase Dashboard > Settings > API > `service_role` key 中可以看到
   - 用于服务端操作，有完整权限

2. **如果是数据库密码**:
   - 长度可能较短
   - 在 Supabase Dashboard > Settings > Database > Database password 中设置
   - 用于 PostgreSQL 直连

## 快速配置脚本

```bash
# 1. 设置 Supabase URL（你的项目）
echo "https://vitveshvmgesvrxxqcyh.supabase.co" | wrangler secret put SUPABASE_URL

# 2. 设置 Anon Key（从 Supabase Dashboard > Settings > API 获取）
wrangler secret put SUPABASE_ANON_KEY

# 3. 设置 Service Role Key（可选，如果需要服务端操作）
wrangler secret put SUPABASE_SERVICE_ROLE_KEY
```

## 测试连接

配置完成后，访问健康检查端点：

```bash
curl https://your-worker.workers.dev/api/v1/db/health
```

应该返回：
```json
{
  "status": "ok",
  "message": "Supabase 连接正常",
  "configured": true
}
```

