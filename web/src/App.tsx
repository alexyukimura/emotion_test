import React, { useEffect, useMemo, useRef, useState } from "react";
import { postVerifyInitData } from "./api";
import type { VerifiedUser } from "./api";
import { clearAllLocal, loadDumps, loadMoods, saveDump, saveMood } from "./storage";
import { getTelegramWebApp, initTelegramChrome, isInTelegram } from "./telegram";

type View = "home" | "breathe" | "dump" | "checkin";

export type VerifyState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ok"; user: VerifiedUser | null; ageSeconds: number }
  | { kind: "error"; message: string };

function fmt(ts: number) {
  const d = new Date(ts);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function todayKey(ts = Date.now()) {
  const d = new Date(ts);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

export function App() {
  const [view, setView] = useState<View>("home");
  const tg = useMemo(() => getTelegramWebApp(), []);
  const [verify, setVerify] = useState<VerifyState>({ kind: "idle" });

  useEffect(() => {
    if (!tg) return;
    initTelegramChrome(tg);
  }, [tg]);

  useEffect(() => {
    const initData = tg?.initData?.trim();
    if (!tg || !initData) {
      setVerify({ kind: "idle" });
      return;
    }
    const ac = new AbortController();
    setVerify({ kind: "loading" });
    postVerifyInitData(initData, ac.signal)
      .then((res) => setVerify({ kind: "ok", user: res.user, ageSeconds: res.ageSeconds }))
      .catch((e: unknown) => {
        if ((e as Error).name === "AbortError") return;
        const msg = e instanceof Error ? e.message : String(e);
        setVerify({ kind: "error", message: msg });
      });
    return () => ac.abort();
  }, [tg]);

  return (
    <div className="wrap">
      <div className="topbar">
        <div className="brand">
          <b>情绪治愈 · 急救箱</b>
          <span>30–120 秒，先让自己舒服一点</span>
        </div>
        <div className="pill">{isInTelegram() ? "Telegram Mini App" : "浏览器单机"}</div>
      </div>

      {verify.kind === "loading" && (
        <div className="tg-strip" role="status">
          正在校验 Telegram 身份…
        </div>
      )}
      {verify.kind === "ok" && (
        <div className="tg-strip tg-strip-ok" role="status">
          已通过服务端校验
          {verify.user?.first_name ? ` · ${verify.user.first_name}` : ""}
          {verify.user?.id != null ? ` · id ${verify.user.id}` : ""}
        </div>
      )}
      {verify.kind === "error" && (
        <div className="tg-strip tg-strip-err" role="alert">
          身份校验未通过（{verify.message}）。仍可本地使用；请确认已启动后端且 <code>BOT_TOKEN</code> 与当前 Bot 一致，本地开发需 Vite 代理 <code>/api</code>。
        </div>
      )}

      <div className="grid">
        <div className="card">
          <div className="hd">
            <b>入口</b>
            <div className="tabs" role="tablist" aria-label="views">
              <button className={`tab ${view === "home" ? "on" : ""}`} onClick={() => setView("home")}>
                首页
              </button>
              <button className={`tab ${view === "breathe" ? "on" : ""}`} onClick={() => setView("breathe")}>
                呼吸
              </button>
              <button className={`tab ${view === "dump" ? "on" : ""}`} onClick={() => setView("dump")}>
                倾倒
              </button>
              <button className={`tab ${view === "checkin" ? "on" : ""}`} onClick={() => setView("checkin")}>
                打卡
              </button>
            </div>
          </div>
          <div className="bd">
            {view === "home" && <Home onGo={setView} verify={verify} />}
            {view === "breathe" && <Breathe />}
            {view === "dump" && <Dump />}
            {view === "checkin" && <Checkin />}

            <div className="footer">
              <div>
                情绪记录与倾倒内容仅保存在本机 <b>localStorage</b>。在 Telegram 内打开且后端校验成功后，服务端可识别你的 Telegram 用户（便于以后做云同步）。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home({ onGo, verify }: { onGo: (v: View) => void; verify: VerifyState }) {
  const tg = useMemo(() => getTelegramWebApp(), []);

  return (
    <>
      <div className="big">
        先做一件小事：<b>把注意力从“脑内风暴”挪到“身体可感知的当下”</b>。
      </div>
      <div style={{ height: 10 }} />
      <div className="btnRow">
        <button className="btn primary" onClick={() => onGo("breathe")}>
          60 秒呼吸急救
        </button>
        <button className="btn" onClick={() => onGo("dump")}>
          把情绪倒进垃圾桶
        </button>
        <button className="btn good" onClick={() => onGo("checkin")}>
          今日情绪打卡
        </button>
        <button
          className="btn danger"
          onClick={() => {
            clearAllLocal();
            location.reload();
          }}
          title="清空本地记录"
        >
          清空本地数据
        </button>
      </div>

      <div style={{ height: 12 }} />
      <div className="muted">
        {!tg && "在普通浏览器中打开：功能与数据均在本地。"}
        {tg && !tg.initData && "已加载 Telegram Web App，但未拿到 initData（请通过 Bot 菜单或带 Web App 的按钮打开）。"}
        {tg && tg.initData && verify.kind === "idle" && "已检测到 initData。"}
        {tg && tg.initData && verify.kind === "loading" && "正在向后端校验 initData…"}
        {tg && tg.initData && verify.kind === "ok" && "后端已校验 initData，可与当前 Bot 安全关联用户身份。"}
        {tg && tg.initData && verify.kind === "error" && "校验失败时仍可继续使用本地功能；部署时请配置正确的 API 地址与 CORS。"}
      </div>
    </>
  );
}

function Breathe() {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");
  const [secLeft, setSecLeft] = useState(60);
  const [running, setRunning] = useState(false);
  const timer = useRef<number | null>(null);

  const plan = useMemo(() => {
    // 4-2-6：吸4，停2，呼6；舒缓为主
    return [
      { phase: "in" as const, seconds: 4, label: "吸气（鼻）" },
      { phase: "hold" as const, seconds: 2, label: "停一下" },
      { phase: "out" as const, seconds: 6, label: "呼气（慢慢）" }
    ];
  }, []);

  useEffect(() => {
    if (!running) return;
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setSecLeft((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
      timer.current = null;
    };
  }, [running]);

  useEffect(() => {
    if (!running) return;
    if (secLeft === 0) setRunning(false);
  }, [secLeft, running]);

  useEffect(() => {
    if (!running) return;
    let i = 0;
    let t: number | null = null;
    const step = () => {
      const cur = plan[i % plan.length];
      setPhase(cur.phase);
      t = window.setTimeout(() => {
        i += 1;
        if (running) step();
      }, cur.seconds * 1000);
    };
    step();
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [plan, running]);

  const label =
    phase === "in" ? "吸气" : phase === "hold" ? "停一下" : phase === "out" ? "呼气" : "呼吸";

  const scale = phase === "in" ? 1.08 : phase === "hold" ? 1.08 : 0.92;

  return (
    <>
      <div className="row">
        <div className="pill">4-2-6 节律</div>
        <div className="pill">剩余 {secLeft}s</div>
      </div>
      <div className="breath">
        <div className="orb" style={{ ["--s" as any]: String(scale) }} />
      </div>
      <div className="big" style={{ textAlign: "center" }}>
        <b>{label}</b>
      </div>
      <div style={{ height: 10 }} />
      <div className="btnRow" style={{ justifyContent: "center" }}>
        {!running ? (
          <button
            className="btn primary"
            onClick={() => {
              setSecLeft(60);
              setRunning(true);
            }}
          >
            开始 60 秒
          </button>
        ) : (
          <button className="btn" onClick={() => setRunning(false)}>
            暂停
          </button>
        )}
        <button
          className="btn"
          onClick={() => {
            setRunning(false);
            setSecLeft(60);
            setPhase("in");
          }}
        >
          重置
        </button>
      </div>
      <div style={{ height: 10 }} />
      <div className="muted">
        你不用“把情绪想明白”才配好起来；先让身体从紧绷里松一点点，就已经很厉害了。
      </div>
    </>
  );
}

function Dump() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(() => loadDumps().slice().reverse());

  return (
    <>
      <div className="big">
        把它写下来，然后“扔掉”。<b>不需要逻辑、也不需要好看</b>。
      </div>
      <div style={{ height: 10 }} />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"随便写：我好烦 / 我很委屈 / 我害怕…\n写完点“扔掉”，就当丢进垃圾桶。"}
      />
      <div style={{ height: 10 }} />
      <div className="btnRow">
        <button
          className="btn primary"
          onClick={() => {
            const t = text.trim();
            if (!t) return;
            saveDump({ ts: Date.now(), text: t });
            setText("");
            setItems(loadDumps().slice().reverse());
          }}
        >
          扔掉（保存到本机）
        </button>
        <button className="btn" onClick={() => setText("")}>
          清空输入
        </button>
      </div>

      <div style={{ height: 14 }} />
      <div className="muted">最近记录（仅你本机可见）：</div>
      <div style={{ height: 8 }} />
      <div className="list">
        {items.length === 0 ? (
          <div className="item">
            <div className="t">暂无</div>
            <div className="c">你可以把第一段情绪丢进来。</div>
          </div>
        ) : (
          items.slice(0, 20).map((it) => (
            <div className="item" key={it.ts}>
              <div className="t">{fmt(it.ts)}</div>
              <div className="c">{it.text}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

function Checkin() {
  const [mood, setMood] = useState(3);
  const [note, setNote] = useState("");
  const [items, setItems] = useState(() => loadMoods().slice().reverse());

  const today = todayKey();
  const todayItems = useMemo(() => items.filter((x) => todayKey(x.ts) === today), [items, today]);
  const avgToday = useMemo(() => {
    if (todayItems.length === 0) return null;
    const s = todayItems.reduce((acc, x) => acc + x.mood, 0) / todayItems.length;
    return Math.round(s * 10) / 10;
  }, [todayItems]);

  const streak = useMemo(() => {
    const set = new Set(items.map((x) => todayKey(x.ts)));
    let d = 0;
    while (set.has(todayKey(Date.now() - d * 86400_000))) d += 1;
    return d;
  }, [items]);

  return (
    <>
      <div className="big">
        现在的你，大概处在什么状态？<b>不评判，只记录</b>。
      </div>
      <div style={{ height: 12 }} />
      <div className="kpi">
        <div className="box">
          <b>{avgToday ?? "—"}</b>
          <span>今日平均（1-5）</span>
        </div>
        <div className="box">
          <b>{todayItems.length}</b>
          <span>今日记录次数</span>
        </div>
        <div className="box">
          <b>{streak}</b>
          <span>连续打卡天数</span>
        </div>
      </div>

      <div style={{ height: 12 }} />
      <div className="row">
        <div className="pill">情绪强度</div>
        <input
          type="range"
          min={1}
          max={5}
          value={mood}
          onChange={(e) => setMood(clamp(Number(e.target.value), 1, 5))}
        />
        <div className="pill">
          <b>{mood}</b>/5
        </div>
      </div>

      <div style={{ height: 10 }} />
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="可选：一句话描述此刻发生了什么/身体感觉如何（越短越好）"
      />

      <div style={{ height: 10 }} />
      <div className="btnRow">
        <button
          className="btn good"
          onClick={() => {
            saveMood({ ts: Date.now(), mood, note: note.trim() || undefined });
            setNote("");
            setItems(loadMoods().slice().reverse());
          }}
        >
          记录一下
        </button>
      </div>

      <div style={{ height: 14 }} />
      <div className="muted">最近记录（仅你本机可见）：</div>
      <div style={{ height: 8 }} />
      <div className="list">
        {items.length === 0 ? (
          <div className="item">
            <div className="t">暂无</div>
            <div className="c">拖动滑块，写一句话，点“记录一下”。</div>
          </div>
        ) : (
          items.slice(0, 20).map((it) => (
            <div className="item" key={it.ts}>
              <div className="t">
                {fmt(it.ts)} · 情绪 {it.mood}/5
              </div>
              <div className="c">{it.note ? it.note : "（无备注）"}</div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

