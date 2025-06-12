/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_USER: string;
  readonly VITE_EMAIL_APP_PASSWORD: string;
  readonly VITE_PORT: string;
  readonly VITE_NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
