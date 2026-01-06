# 🚀 快速配置 Supabase

## 你的配置信息

- **Supabase URL**: `https://vitveshvmgesvrxxqcyh.supabase.co`
- **Publishable Key**: `sb_publishable_R6QiESNjXTueXkuISjfgEw_N32XrVcV`
- **Secret Key**: `sb_secret_paA9ofsC_TbzKQlUaw4a-Q_MYEgE8sR`

## 一键配置

运行配置脚本：

```bash
./setup-supabase.sh
```

## 手动配置

如果你想手动配置，运行以下命令：

```bash
# 1. 设置 Supabase URL
echo "https://vitveshvmgesvrxxqcyh.supabase.co" | wrangler secret put SUPABASE_URL

# 2. 设置 Publishable Key（用于客户端操作）
echo "sb_publishable_R6QiESNjXTueXkuISjfgEw_N32XrVcV" | wrangler secret put SUPABASE_PUBLISHABLE_KEY

# 3. 设置 Secret Key（用于服务端操作，绕过 RLS）
echo "sb_secret_paA9ofsC_TbzKQlUaw4a-Q_MYEgE8sR" | wrangler secret put SUPABASE_SECRET_KEY
```

## 在代码中使用

```typescript
import { createSupabaseClient } from './supabase';

// 使用 Publishable Key（客户端操作，受 RLS 限制）
const supabase = createSupabaseClient(c.env, false);

// 使用 Secret Key（服务端操作，绕过 RLS）
const supabase = createSupabaseClient(c.env, true);

// 查询数据
const { data, error } = await supabase
  .from('your_table')
  .select('*');
```

## 测试连接

配置完成后，启动开发服务器：

```bash
npm run dev
```

然后访问：
- 健康检查: http://localhost:8791/api/v1/db/health

应该返回：
```json
{
  "status": "ok",
  "message": "Supabase 连接正常",
  "configured": true
}
```

## 密钥说明

- **Publishable Key**: 用于客户端操作，可以公开使用，但受 Row Level Security (RLS) 限制
- **Secret Key**: 用于服务端操作，有完整权限，可以绕过 RLS，**不要**在客户端代码中暴露

