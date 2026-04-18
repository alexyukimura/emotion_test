/**
 * Telegram Web App（由 index.html 引入 telegram.org/js/telegram-web-app.js）
 * @see https://core.telegram.org/bots/webapps
 */
export type TelegramThemeParams = Record<string, string | undefined>;

export type TelegramWebAppUserUnsafe = {
  id: number;
  is_bot?: boolean;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
};

export type TelegramWebApp = {
  /** Mini App 内通常有值；外链预览等场景可能为空 */
  initData?: string;
  initDataUnsafe: {
    user?: TelegramWebAppUserUnsafe;
    query_id?: string;
    auth_date?: number;
    hash?: string;
    [k: string]: unknown;
  };
  version: string;
  platform: string;
  colorScheme: "light" | "dark";
  themeParams: TelegramThemeParams;
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  headerColor: string;
  backgroundColor: string;
  isClosingConfirmationEnabled: boolean;
  BackButton: { isVisible: boolean; onClick: (cb: () => void) => void; offClick: (cb: () => void) => void; show: () => void; hide: () => void };
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText: (t: string) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive?: boolean) => void;
    hideProgress: () => void;
    onClick: (cb: () => void) => void;
    offClick: (cb: () => void) => void;
  };
  HapticFeedback: {
    impactOccurred: (style: "light" | "medium" | "heavy" | "rigid" | "soft") => void;
    notificationOccurred: (type: "error" | "success" | "warning") => void;
    selectionChanged: () => void;
  };
  ready: () => void;
  expand: () => void;
  close: () => void;
  enableClosingConfirmation: () => void;
  disableClosingConfirmation: () => void;
  onEvent: (eventType: string, callback: () => void) => void;
  offEvent: (eventType: string, callback: () => void) => void;
  sendData: (data: string) => void;
  openLink: (url: string, options?: { try_instant_view?: boolean }) => void;
  openTelegramLink: (url: string) => void;
  showPopup: (params: Record<string, unknown>, callback?: (id?: string) => void) => void;
  showAlert: (message: string, callback?: () => void) => void;
  showConfirm: (message: string, callback?: (ok: boolean) => void) => void;
  setHeaderColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
};

export function getTelegramWebApp(): TelegramWebApp | null {
  return window.Telegram?.WebApp ?? null;
}

export function isInTelegram(): boolean {
  return Boolean(getTelegramWebApp());
}

/** 首次进入 Mini App 时调用：通知客户端已就绪并尽量全屏 */
export function initTelegramChrome(tg: TelegramWebApp) {
  tg.ready();
  tg.expand();
}
