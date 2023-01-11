import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// cores tokens do theme{
export const tokens = (mode) => ({
...(mode === 'dark'
    ? {
        grey: {
            100: "#cddbe9",
            200: "#9bb7d4",
            300: "#6893be",
            400: "#366fa9",
            500: "#044b93",
            600: "#033c76",
            700: "#022d58",
            800: "#021e3b",
            900: "#010f1d"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        
        greenAccent: {
            100: "#cdebd5",
            200: "#9bd7ab",
            300: "#68c480",
            400: "#36b056",
            500: "#049c2c",
            600: "#037d23",
            700: "#025e1a",
            800: "#023e12",
            900: "#011f09"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        },
    }
  : {
        grey: {
            100: "#010f1d",
            200: "#021e3b",
            300: "#022d58",
            400: "#033c76",
            500: "#044b93",
            600: "#366fa9",
            700: "#6893be",
            800: "#9bb7d4",
            900: "#cddbe9"
        },
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#101624",
            500: "#141b2d",
            600: "#434957",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5"
        },
        greenAccent: {
            100: "#011f09",
            200: "#023e12",
            300: "#025e1a",
            400: "#037d23",
            500: "#049c2c",
            600: "#36b056",
            700: "#68c480",
            800: "#9bd7ab",
            900: "#cdebd5"
        },
        redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb"
        },
        blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe"
        },
    }),
});

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500],
              },
              red: {
                main: "#D30000",
              },
              Yellow: {
                main: "#643B9F",
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              },
              red: {
                main: "#D30000",
              },
              Yellow: {
                main: "#643B9F",
              },
            }),
      },
      typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  
  // context for color mode
  export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };
