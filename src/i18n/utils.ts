import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// `string` rather than a strict literal union, since some keys are built
// dynamically (e.g. `...protocols.${i}.name`). Falls back to French, then
// the raw key, so a typo never renders `undefined`.
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string): string {
    const dict = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLang] as Record<string, string>;
    return dict[key] ?? fallback[key] ?? key;
  };
}
