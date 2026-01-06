#!/bin/bash

# Cloudflare部署脚本
echo "开始部署nano-img-hono到Cloudflare Workers..."

# 验证Cloudflare API Token
echo "验证Cloudflare API Token..."
curl -s "https://api.cloudflare.com/client/v4/user/tokens/verify" \
  -H "Authorization: Bearer vrAQjVIKDuOodbYgjfYyOJOiDHEQaoWHVVW30cP4" \
  -H "Content-Type: application/json" | jq .

# 检查验证结果
if [ $? -eq 0 ]; then
    echo "API Token验证成功"
else
    echo "API Token验证失败，请检查token是否正确"
    exit 1
fi

# 部署到生产环境
echo "部署到Cloudflare Workers生产环境..."
npx wrangler deploy --env production

# 检查部署结果
if [ $? -eq 0 ]; then
    echo "部署成功！"
    echo "应用已部署到: https://s.nano-img.com"
else
    echo "部署失败，请检查错误信息"
    exit 1
fi

echo "部署完成！"
