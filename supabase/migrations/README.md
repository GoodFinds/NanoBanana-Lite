# Database Migrations

此文件夹包含所有数据库迁移文件。

## 命名规范

迁移文件应使用以下格式命名：
```
YYYYMMDDHHMMSS_description.sql
```

例如：
- `20240101120000_create_users_table.sql`
- `20240102150000_add_email_column.sql`

## 使用方法

### 创建新迁移

如果使用 Supabase CLI：
```bash
supabase migration new your_migration_name
```

### 手动创建

直接在此文件夹中创建新的 SQL 文件，文件名遵循上述命名规范。

### 应用迁移

```bash
# 重置本地数据库并应用所有迁移
supabase db reset

# 或推送到远程项目
supabase db push
```

## 注意事项

- 迁移文件按时间戳顺序执行
- 确保迁移是幂等的（可以安全地重复执行）
- 使用事务确保迁移的原子性
- 在应用到生产环境前，先在本地测试

