export class ThemeUtils {
    static THEME_NAME_DARK = 'app-theme-dark';
    static THEME_NAME_LIGHT = 'app-theme-light';

    static toggleTheme() {
        document.documentElement.className = (document.documentElement.className === ThemeUtils.THEME_NAME_LIGHT)
            ? ThemeUtils.THEME_NAME_DARK : ThemeUtils.THEME_NAME_LIGHT;
    }
}
