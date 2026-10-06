import { ref, watchEffect } from "vue";

export type Locale = "en" | "pt";
export type Text = Record<Locale, string>;

const STORAGE_KEY = "locale";

function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    // storage blocked: fall back to the browser language
  }
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export const locale = ref<Locale>(initialLocale());

export const tr = (text: Text): string => text[locale.value];

watchEffect(() => {
  document.documentElement.lang = locale.value === "pt" ? "pt-BR" : "en";
  document.title = tr({
    en: "Diego Vieira — Tech Lead & game maker",
    pt: "Diego Vieira — Tech Lead e criador de jogos",
  });
  try {
    localStorage.setItem(STORAGE_KEY, locale.value);
  } catch {
    // storage blocked: choice lasts for this visit only
  }
});

const MONTH_FORMAT: Record<Locale, string> = { en: "en-US", pt: "pt-BR" };

/** "2026-06" → local Date at the first of that month (no UTC day shift). */
function parseMonth(value: string): Date {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function formatMonth(value: string): string {
  return parseMonth(value)
    .toLocaleDateString(MONTH_FORMAT[locale.value], {
      year: "numeric",
      month: "short",
    })
    .replace(" de ", " ");
}

/** Inclusive month count, the way LinkedIn shows it. */
function duration(start: string, end?: string): string {
  const from = parseMonth(start);
  const to = end ? parseMonth(end) : new Date();
  const total =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth()) +
    1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const pt = locale.value === "pt";
  const parts: string[] = [];
  if (years) parts.push(pt ? `${years} ${years > 1 ? "anos" : "ano"}` : `${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(pt ? `${months} ${months > 1 ? "meses" : "mês"}` : `${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export function period(start: string, end?: string): string {
  const until = end ? formatMonth(end) : tr({ en: "Present", pt: "Atual" });
  return `${formatMonth(start)} – ${until} · ${duration(start, end)}`;
}
