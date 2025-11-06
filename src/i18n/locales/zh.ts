import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Funiq Trading",
  "site.desc": "一个用 C++ 编写的量化交易系统",
  "light": "浅色",
  "dark": "深色",
  "system": "系统",
  "toggle_theme": "切换主题",
};

const CNLocale: I18nStrings = {
  ...baseStrings,
  'on_this_page': '本页内容',
  'search': '搜索',
  docs: "文档",
  "paths.getting-started": "开始使用",
  "a11y.languagePicker": "选择语言",
  "footer.builtBy": "构建者",
  "footer.sourceCode": "源代码托管于",
  "meta.by": "作者",
};

export default CNLocale;
