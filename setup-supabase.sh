#!/bin/bash

# Supabase 配置脚本
# 项目 ID: vitveshvmgesvrxxqcyh
# Supabase URL: https://vitveshvmgesvrxxqcyh.supabase.co

echo "🚀 开始配置 Supabase..."
echo ""

# 设置 Supabase URL
echo "📝 设置 SUPABASE_URL..."
echo "https://vitveshvmgesvrxxqcyh.supabase.co" | wrangler secret put SUPABASE_URL

echo ""
echo "✅ SUPABASE_URL 已设置: https://vitveshvmgesvrxxqcyh.supabase.co"
echo ""

# 设置 Publishable Key
echo "📝 设置 SUPABASE_PUBLISHABLE_KEY..."
echo "sb_publishable_R6QiESNjXTueXkuISjfgEw_N32XrVcV" | wrangler secret put SUPABASE_PUBLISHABLE_KEY

echo ""
echo "✅ SUPABASE_PUBLISHABLE_KEY 已设置"
echo ""

# 设置 Secret Key
echo "📝 设置 SUPABASE_SECRET_KEY..."
echo "sb_secret_paA9ofsC_TbzKQlUaw4a-Q_MYEgE8sR" | wrangler secret put SUPABASE_SECRET_KEY

echo ""
echo "✅ SUPABASE_SECRET_KEY 已设置"
echo ""

echo "✨ 配置完成！"
echo ""
echo "📋 配置摘要:"
echo "   - SUPABASE_URL: https://vitveshvmgesvrxxqcyh.supabase.co"
echo "   - SUPABASE_PUBLISHABLE_KEY: sb_publishable_R6QiESNjXTueXkuISjfgEw_N32XrVcV"
echo "   - SUPABASE_SECRET_KEY: sb_secret_paA9ofsC_TbzKQlUaw4a-Q_MYEgE8sR"
echo ""
echo "🧪 测试连接:"
echo "   访问 http://localhost:8791/api/v1/db/health 或部署后的健康检查端点"
echo ""

