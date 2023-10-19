import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { ColorModeContext } from "./context/ColorModeContext";
import { getDesignTokens } from "./helpers/themes";
import Layout from "./shared-components/layout";

function App({ component }: any) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Layout component={component} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
