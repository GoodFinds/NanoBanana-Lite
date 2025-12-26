#!/bin/bash

echo "🚀 nano-img-hono 部署前检查"
echo "=============================="

# 检查必要文件
echo "📁 检查项目文件:"
files=("src/index.ts" "src/html-content.ts" "package.json" "wrangler.toml" "tsconfig.json")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (缺失)"
    fi
done

echo ""
echo "📦 检查依赖:"
if npm list hono > /dev/null 2>&1; then
    echo "✅ hono"
else
    echo "❌ hono (未安装)"
fi

if npm list wrangler > /dev/null 2>&1; then
    echo "✅ wrangler"
else
    echo "❌ wrangler (未安装)"
fi

echo ""
echo "🧪 检查本地服务:"
if curl -s -o /dev/null -w "" http://localhost:8791/health; then
    echo "✅ 本地服务运行正常"
else
    echo "❌ 本地服务未运行"
fi

echo ""
echo "🎯 部署命令:"
echo "npm run deploy"

echo ""
echo "📝 部署后验证:"
echo "1. 检查 Cloudflare Workers 控制台"
echo "2. 测试线上版本的所有端点"
echo "3. 验证 AI 抽卡功能"

chmod +x deploy-check.sh
