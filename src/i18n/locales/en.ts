import type { I18nStrings } from "../types";

const baseStrings = {
  "site.title": "Funiq Trading",
  "site.desc": "A Quantitative Trading System written in C++",
  "light": "Light",
  "dark": "Dark",
  "system": "System",
  "toggle_theme": "Toggle theme",
};

const ENLocale: I18nStrings = {
  ...baseStrings,
  'on_this_page': 'On This Page',
  'search': 'Search',
  docs: "Docs",
  'paths.getting-started': 'Getting Started',
  'paths.apis': 'APIs',
  "a11y.languagePicker": "Select language",
  "footer.builtBy": "Built by",
  "footer.sourceCode": "The source code is available on",
  "meta.by": "By",
};

export default ENLocale;
