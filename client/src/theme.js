export const tokensDark = {
    grey: {
        0: "#ecf1f2",
        10: "#e3e9ec",
        50: "#d9e2e5",
        100: "#d0dbdf",
        200: "#a2b7bf",
        300: "#7393a0",
        400: "#456f80",
        500: "#164b60",
        600: "#123c4d",
        700: "#0d2d3a",
        800: "#091e26",
        900: "#040f13",
        1000: "#030c0f",
    },
    primary: {
        100: "#d1e1e9",
        200: "#a4c4d4",
        300: "#76a6be",
        400: "#4989a9",
        500: "#1b6b93",
        600: "#165676",
        700: "#104058",
        800: "#0b2b3b",
        900: "#05151d"
    },
    // ctrl+k -> ctrl+g
    secondary: {
        50: "#f0ffec", // ---
        100: "#ecffe7",
        200: "#daffcf",
        300: "#c7ffb6",
        400: "#b5ff9e",
        500: "#a2ff86",
        600: "#82cc6b",
        700: "#619950",
        800: "#416636",
        900: "#20331b"
    },
};

function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}

export const tokensLight = reverseTokens(tokensDark);


export const themeSettings = (mode) => {
    return {
        palette: {
        mode: mode,
        ...(mode === "dark"
            ? {
                // palette values for dark mode
                primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
                },
                secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[300],
                },
                neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
                },
                background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
                },
            }
            : {
                // palette values for light mode
                primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
                },
                secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
                },
                neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
                },
                background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
                },
            }),
        },
        typography: {
        fontFamily: ["Ubuntu", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 40,
        },
        h2: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 32,
        },
        h3: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 24,
        },
        h4: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 20,
        },
        h5: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 16,
        },
        h6: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
            fontSize: 14,
        },
        },
    };
};