import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Source Sans Pro"].join(
      ","
    ),
  },
  palette: {
    mode: "light",
    primary: {
      light: "#3B71ED",
      main: "#284BA0",
      dark: "#224087",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: grey[800],
      light: grey[200],
      main: grey[500],
      dark: grey[600],
    },
  },
});

export const veryPeriTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Source Sans Pro"].join(
      ","
    ),
  },
  palette: {
    mode: "light",
    primary: {
      light: "#937CDE",
      main: "#7B7DC8",
      dark: "#6A6CAD",
    },
    secondary: {
      light: "#83E070",
      main: "#9FCA70",
      dark: "#8AB061",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: grey[800],
      light: grey[200],
      main: grey[500],
      dark: grey[600],
    },
  },
});

export const blackPinkTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Source Sans Pro"].join(
      ","
    ),
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#FB7D94",
      main: "#F1BBC7",
      dark: "#C79FA6",
    },
    secondary: {
      light: "#A8A8A8",
      main: "#5C5C5C",
      dark: "#424242",
    },
    background: {
      default: "#303030",
      paper: "#303030",
    },
    text: {
      light: grey[700],
      main: grey[500],
      dark: grey[400],
    },
  },
});

export const blackGoldTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Source Sans Pro"].join(
      ","
    ),
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#F2E96B",
      main: "#DCCA6C",
      dark: "#A89A52",
    },
    secondary: {
      light: "#A8A8A8",
      main: "#5C5C5C",
      dark: "#424242",
    },
    background: {
      default: "#303030",
      paper: "#303030",
    },
    text: {
      light: grey[700],
      main: grey[500],
      dark: grey[400],
    },
  },
});

export const blackCyanTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Source Sans Pro"].join(
      ","
    ),
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#19FBFF",
      main: "#00C2C4",
      dark: "#00A8AB",
    },
    secondary: {
      light: "#A8A8A8",
      main: "#5C5C5C",
      dark: "#424242",
    },
    background: {
      default: "#303030",
      paper: "#303030",
    },
    text: {
      light: grey[700],
      main: grey[500],
      dark: grey[400],
    },
  },
});
