export type MoodEntry = {
  ts: number;
  mood: number; // 1..5
  note?: string;
};

export type DumpEntry = {
  ts: number;
  text: string;
};

const KEY_MOODS = "emotion-heal:moods:v1";
const KEY_DUMPS = "emotion-heal:dumps:v1";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function loadMoods(): MoodEntry[] {
  return safeParse<MoodEntry[]>(localStorage.getItem(KEY_MOODS), []);
}

export function saveMood(entry: MoodEntry) {
  const all = loadMoods();
  all.push(entry);
  localStorage.setItem(KEY_MOODS, JSON.stringify(all.slice(-200)));
}

export function loadDumps(): DumpEntry[] {
  return safeParse<DumpEntry[]>(localStorage.getItem(KEY_DUMPS), []);
}

export function saveDump(entry: DumpEntry) {
  const all = loadDumps();
  all.push(entry);
  localStorage.setItem(KEY_DUMPS, JSON.stringify(all.slice(-200)));
}

export function clearAllLocal() {
  localStorage.removeItem(KEY_MOODS);
  localStorage.removeItem(KEY_DUMPS);
}

