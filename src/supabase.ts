import { createClient } from '@supabase/supabase-js';

export interface SupabaseConfig {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  // 支持 Publishable 和 Secret keys（替代标准 keys）
  SUPABASE_PUBLISHABLE_KEY?: string;
  SUPABASE_SECRET_KEY?: string;
  // 数据库连接配置（可选，用于 PostgreSQL 直连）
  SUPABASE_DB_PASSWORD?: string;
  SUPABASE_DB_HOST?: string;
  SUPABASE_DB_PORT?: string;
  SUPABASE_DB_NAME?: string;
  SUPABASE_DB_USER?: string;
}

/**
 * 创建 Supabase 客户端
 * @param env 环境变量，包含 Supabase 配置
 * @param useServiceRole 是否使用服务角色密钥（用于服务端操作，绕过 RLS）
 * @returns Supabase 客户端实例
 */
export function createSupabaseClient(
  env: SupabaseConfig,
  useServiceRole: boolean = false
) {
  const supabaseUrl = env.SUPABASE_URL;
  
  // 优先使用标准 keys，如果没有则使用 Publishable/Secret keys
  let supabaseKey: string;
  
  if (useServiceRole) {
    // 服务端操作：优先使用 SERVICE_ROLE_KEY，其次使用 SECRET_KEY
    supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SECRET_KEY || '';
  } else {
    // 客户端操作：优先使用 ANON_KEY，其次使用 PUBLISHABLE_KEY
    supabaseKey = env.SUPABASE_ANON_KEY || env.SUPABASE_PUBLISHABLE_KEY || '';
  }

  if (!supabaseUrl || !supabaseKey) {
    const keyType = useServiceRole ? 'SUPABASE_SERVICE_ROLE_KEY 或 SUPABASE_SECRET_KEY' : 'SUPABASE_ANON_KEY 或 SUPABASE_PUBLISHABLE_KEY';
    throw new Error(
      `Supabase 配置不完整。请确保设置了 SUPABASE_URL 和 ${keyType} 环境变量。`
    );
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false, // Cloudflare Workers 不支持持久化会话
      autoRefreshToken: false,
    },
  });
}

/**
 * 验证 Supabase 配置
 * @param env 环境变量
 * @returns 配置是否有效
 */
export function validateSupabaseConfig(env: Partial<SupabaseConfig>): boolean {
  // 支持标准 keys 或 Publishable/Secret keys
  const hasClientKey = !!(env.SUPABASE_ANON_KEY || env.SUPABASE_PUBLISHABLE_KEY);
  return !!(env.SUPABASE_URL && hasClientKey);
}

/**
 * 构建 PostgreSQL 连接字符串
 * @param env 环境变量
 * @returns PostgreSQL 连接字符串
 */
export function buildPostgresConnectionString(env: Partial<SupabaseConfig>): string | null {
  const {
    SUPABASE_DB_HOST,
    SUPABASE_DB_PORT = '5432',
    SUPABASE_DB_NAME,
    SUPABASE_DB_USER = 'postgres',
    SUPABASE_DB_PASSWORD,
  } = env;

  if (!SUPABASE_DB_HOST || !SUPABASE_DB_NAME || !SUPABASE_DB_PASSWORD) {
    return null;
  }

  // 从 SUPABASE_URL 提取主机名（如果提供了完整 URL）
  let host = SUPABASE_DB_HOST;
  if (env.SUPABASE_URL && !host.includes('.')) {
    try {
      const url = new URL(env.SUPABASE_URL);
      // Supabase 数据库主机通常是 db.{project_ref}.supabase.co
      const projectRef = url.hostname.split('.')[0];
      host = `db.${projectRef}.supabase.co`;
    } catch (e) {
      // 如果解析失败，使用提供的 host
    }
  }

  return `postgresql://${SUPABASE_DB_USER}:${SUPABASE_DB_PASSWORD}@${host}:${SUPABASE_DB_PORT}/${SUPABASE_DB_NAME}?sslmode=require`;
}

