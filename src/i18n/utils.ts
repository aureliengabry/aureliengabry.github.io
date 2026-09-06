import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// `key` is typed as `string` rather than `keyof typeof ui.en` because several
// sections key into repeated data (e.g. `selectedWork.integration.protocols.${i}.name`)
// with a dynamically-built path, which a strict literal-union type can't
// express. Falls back to French (the default language), then to the raw
// key, so a typo never renders `undefined`.
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string): string {
    const dict = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLang] as Record<string, string>;
    return dict[key] ?? fallback[key] ?? key;
  };
}
