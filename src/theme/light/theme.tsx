import { createTheme, type Theme } from '@mui/material/styles';
import { components } from "./components";

export const lightDefaultPrimaryColor = '#154c79';
export const lightDefaultSecondaryColor = '#76b5c5';
export const lightTextColor = '#242C37';
export const lightBorderColor = '#CFD5E2' //'#e5e7eb'

/* 
ITS PALETTE
Primary #1976D2 #1873cd
Secondary #212121
# ffffff

color options: 
primary #263238
*/

export function createLightTheme(): Theme {
    // const primary = primaryColor ?? lightDefaultPrimaryColor;
    // const secondary = secondaryColor ?? lightDefaultSecondaryColor;
    const primary = lightDefaultPrimaryColor;
    const secondary = lightDefaultSecondaryColor;

    return createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: primary,
                contrastText: '#fff'
            },
            secondary: {
                main: secondary,
                contrastText: '#DEE3EB',
            },
            success: {
                main: '#43A547',
                contrastText: '#fff'
            },
            warning: {
                main: "#FF8D02",
                contrastText: '#fff'
            },
            error: {
                main: '#F23A30',
                contrastText: '#fff'
            },
            text: {
                primary: lightTextColor
            },
            background: {
                default: '#F5F6FA',// 'rgba(242, 242, 242, .5)'
            },
            divider: lightBorderColor,
            // Used by `getContrastText()` to maximize the contrast between
            // the background and the text.
            contrastThreshold: 3,
            // Used by the functions below to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
            tonalOffset: 0.2,
        },
        typography: {
            fontFamily: "Inter, Roboto, sans-serif",
            allVariants: {
                color: lightTextColor,
            },
            body1: {
                color: lightTextColor,
            },
            h1: {
                fontSize: 24,
                fontWeight: 'bold'
            },
            h2: {
                fontSize: 20,
                fontWeight: 'bold',
            },
            h3: {
                fontSize: 18,
                fontWeight: 'bold',
            }
        },
        components,
    });
}

