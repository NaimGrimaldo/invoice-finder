import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { createLightTheme } from './light/theme';
import { createEmotionCache } from './createEmotionCache';

const cache = createEmotionCache();

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={createLightTheme()}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}