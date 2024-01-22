import { createTheme } from "@mui/material";

export const customTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#ff9800",
        light: "#ef6c00",
      },
      linkColor: {
        main: "#fff",
        darker: "#000",
      },
    },
  });
};
