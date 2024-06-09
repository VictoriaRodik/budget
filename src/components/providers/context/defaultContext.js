import { getFromStorage } from "../../../utils/sessionStorage";
import { THEMES } from "../themes/themeList";
import { LOCALES } from "../i18n/constants";

export default {
  currency: "UAH",
  themeName: getFromStorage("themeName") || THEMES.LIGHT,
  locale: getFromStorage("locale") || LOCALES.ENGLICH,
};
