import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

        if (theme === undefined) {
        // Можно выполнить какие-либо дополнительные действия при неопределенном значении theme, если это необходимо.
        // Например, можно установить значение по умолчанию.
        return {
            theme: Theme.LIGHT, // Значение по умолчанию
            toggleTheme: () => {}, // Пустая функция, если theme не определено
        };
    }

    const toggleTheme = () => {
        if (setTheme) {
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    };

    return {
        theme,
        toggleTheme,
    };
}
