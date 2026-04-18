export type VerifiedUser = {
  id: number;
  is_bot?: boolean;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
};

export type VerifyResponse = {
  ok: true;
  ageSeconds: number;
  user: VerifiedUser | null;
  auth_date: string | null;
};

function apiBase(): string {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (raw === undefined || raw === "") return "";
  return String(raw).replace(/\/$/, "");
}

/**
 * 将 Mini App 的 initData 发到后端做 HMAC 校验。
 * 本地开发：留空 VITE_API_BASE_URL，走 Vite proxy 的 `/api/verify`。
 * 线上：设为后端根地址，如 https://api.example.com
 */
export async function postVerifyInitData(initData: string, signal?: AbortSignal): Promise<VerifyResponse> {
  const base = apiBase();
  const url = base ? `${base}/api/verify` : "/api/verify";
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ initData }),
    signal
  });
  const j = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    const err = typeof j.error === "string" ? j.error : res.statusText || "verify_failed";
    throw new Error(err);
  }
  if (j.ok !== true) {
    const err = typeof j.error === "string" ? j.error : "verify_failed";
    throw new Error(err);
  }
  return j as unknown as VerifyResponse;
}
