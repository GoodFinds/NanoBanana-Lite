-- 示例迁移文件
-- 这是一个示例文件，展示如何编写迁移 SQL
-- 实际使用时，请根据你的需求修改或删除此文件

-- 示例：创建表
-- CREATE TABLE IF NOT EXISTS example_table (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   name TEXT NOT NULL,
--   created_at TIMESTAMPTZ DEFAULT NOW(),
--   updated_at TIMESTAMPTZ DEFAULT NOW()
-- );

-- 示例：添加列
-- ALTER TABLE example_table ADD COLUMN IF NOT EXISTS email TEXT;

-- 示例：创建索引
-- CREATE INDEX IF NOT EXISTS idx_example_table_email ON example_table(email);

-- 注意：
-- 1. 使用 IF NOT EXISTS 或 IF EXISTS 使迁移更安全
-- 2. 使用事务确保迁移的原子性
-- 3. 在生产环境应用前，先在本地测试

