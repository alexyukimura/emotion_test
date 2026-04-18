/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 后端 API 根 URL（不含尾斜杠）。留空则使用同源 `/api`（配合 Vite dev proxy） */
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

