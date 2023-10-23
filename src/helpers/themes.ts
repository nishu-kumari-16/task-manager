import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    athensGray?: string;
    white?: string;
    magnolia?: string;
    catskillWhite?: string;
    royalBlue?: string;
    royalBlueText?: string;
    titanWhite?: string;
    dodgerBlue?: string;
    dodgerBlueIcon?: string;
    portGore?: string;
    regentGray?: string;
    slateGray: string;
    japaneseLaurel?: string;
    mystic?: string;
    codGray?: string;
    svgRegentGray?: string;
    black?: string;
    wildSand?: string;
    paleSky?: string;
    brightGray?: string;
    manatee?: string;
    blackSqueeze?: string;
    malachite?: string;
    fireBush?: string;
    iron?: string;
    charade?: string;
  }

  interface PaletteOptions {
    athensGray?: string;
    white?: string;
    magnolia?: string;
    catskillWhite?: string;
    royalBlueText?: string;
    royalBlue?: string;
    titanWhite?: string;
    dodgerBlueIcon?: string;
    dodgerBlue?: string;
    portGore?: string;
    regentGray?: string;
    slateGray?: string;
    japaneseLaurel?: string;
    mystic?: string;
    codGray?: string;
    svgRegentGray?: string;
    black?: string;
    wildSand?: string;
    paleSky?: string;
    brightGray?: string;
    manatee?: string;
    blackSqueeze?: string;
    malachite?: string;
    fireBush?: string;
    iron?: string;
    charade?: string;
  }
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#F3F4F8",
          },
          athensGray: "#F3F4F8",
          white: "#ffffff",
          magnolia: "#FBFAFF",
          catskillWhite: "#F3F7FA",
          royalBlue: "#5051F9",
          titanWhite: "#EDECFE",
          dodgerBlue: "#23B2FF",
          dodgerBlueIcon: "#5051FB",
          mystic: "#E8EDF1",
          codGray: "#1E1E1E",
          svgRegentGray: "#8D98A9",
          regentGray: "#8C97A8",
          slateGray: "#768396",
          japaneseLaurel: "#299702",
          black: "#000000",
          royalBlueText: "#5051F9",
          windSand: "#F4F4F4",
          paleSky: "#6A7181",
          brightGray: "#3B3F58",
          manatee: "#8185A0",
          blackSqueeze: "#EDF2F8",
          malachite: "#11BD23",
          fireBush: "#E78830",
          iron: "#D1D2D6",
          charade: "#ffffff",
          // palette values for light mode
          text: {
            primary: "#23235F",
            portGore: "#23235F",
            regentGray: "#8C97A8",
            slateGray: "#768396",
            japaneseLaurel: "#299702",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#131517",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "#ffffff",
          },
          black: "#ffffff",
          windSand: "#000000",
          athensGray: "#131517",
          white: "#1E1F25",
          magnolia: "#1E1F25",
          catskillWhite: "#050505",
          dodgerBlueIcon: "#E4E4E4",
          royalBlue: "#5051F9",
          royalBlueText: "#E9E9E9",
          titanWhite: "#282932",
          dodgerBlue: "#23B2FF",
          mystic: "#24252D",
          codGray: "#F5F5F5",
          svgRegentGray: "#D8D8D8",
          regentGray: "#E1E3E7",
          slateGray: "#768396",
          japaneseLaurel: "#898999",
          paleSky: "#6A7181",
          brightGray: "#5E6370",
          manatee: "#D3D3D4",
          blackSqueeze: "#1E1F25",
          malachite: "#11BD23",
          fireBush: "#E78830",
          iron: "#393A49",
          charade: "#282932",
          text: {
            primary: "#D7D7D7",
            portGore: "#D7D7D7",
            regentGray: "#E1E3E7",
            slateGray: "#768396",
            japaneseLaurel: "#898999",
          },
        }),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          color: mode === "light" ? "#232360" : "#D7D7D7",
          fontWeight: "500",
          fontSize: "1.125rem",
          "&.MuiTabs-indicator": {
            backgroundColor: "#1EA7FF",
          },
          "&.Mui-selected": {
            color: "#1EA7FF",
          },
          "::-webkit-scrollbar": {
            width: "0.25rem",
            height: "0.25rem",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          lineHeight: "1.05rem",
          fontWeight: 500,
          padding: "0.5625rem 1.125rem",
          borderRadius: "0.5rem",
        },
        contained: {
          background: "#5051F9",
          color: "#ffffff",
          "&:hover": {
            background: "#5051F9",
          },
        },
        outlined: {
          border: `0.0625rem solid #D9DADE`,
          color: mode === "light" ? "#23235F" : "#ffffff",
          "&:hover": {
            border: "0.0625rem solid #5051F9",
            color: "#5051F9",
          },
          ":disabled": {
            border: `0.0625rem solid solid #DDDDDD`,
          },
        },
        text: {
          ":focus": {
            outline: "none",
          },
        },
        sizeSmall: {
          fontSize: "0.75rem",
          padding: "0.5rem 0.75rem",
          lineHeight: "0.9rem",
        },

        sizeLarge: {
          fontSize: "1.125rem",
          fontWeight: 500,
          lineHeight: "1.75rem",
          padding: "1rem 1.75rem",
          boxShadow: "0 0.0625rem 0.125rem rgba(16, 24, 40, 0.05)",
        },
        sizeMedium: {
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: "1rem",
          padding: "0.75rem 1rem",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "2.5rem",
          border: `none`,
          padding: "0.75rem 1rem",
          borderRadius: "0.5rem",
          lineHeight: "0.875rem",
          maxWidth: "32rem",
          "&::before": {
            borderBottom: "none !important",
          },
          "&::after": {
            borderBottom: "none !important",
          },
          "&.Mui-focused": {
            border: "1px solid #5051F9 !important",
          },
          "&.Mui-disabled": {
            border: "1px solid #E5E5ED !important",
            padding: "0.75rem 0.5rem !important",
          },
          "&.Mui-error": {
            border: `none`,
          },
          fieldset: {
            border: "none",
          },
        },
        input: {
          padding: "0 0 0 0.625rem",
          height: "auto",
          "&::placeholder": {},
        },
      },
    },
  },
});
