import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 4,
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED",
      light: "#A78BFA",
      dark: "#5B21B6",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#14B8A6",
    },
    brand: {
      main: "#111827",
    },
    background: {
      default: "#fff",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
    },
    divider: "#E5E7EB",
  },
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h4: { fontWeight: 700, fontSize: "1.5rem" },
    h5: { fontWeight: 700, fontSize: "1.25rem" },
    button: { textTransform: "none", fontWeight: 600 },
    body1: { fontSize: "15px" },
    body2: { fontSize: "14px" },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    brand: Palette["primary"];
  }
  interface PaletteOptions {
    brand?: PaletteOptions["primary"];
  }
}
