import { createTheme } from "@mui/material/styles";

const useTheme = () => {
  return createTheme({
    typography: {
      fontFamily: "'Open Sans', 'Inter', sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#F1F5F9",
          },
        },
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#3C50E0",
      },
      secondary: {
        main: "#64748B",
      },
      text: {
        primary: "#1C2434",
        secondary: "#9D9D9D",
      },
    },
  });
};

export default useTheme;
