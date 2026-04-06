import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import Detect from "./pages/Detect";
import Dashboard from "./pages/Dashboard";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4ea0ff",
    },
    secondary: {
      main: "#7d5cff",
    },
    background: {
      default: "#07111f",
      paper: "rgba(7, 17, 31, 0.72)",
    },
    text: {
      primary: "#f8fbff",
      secondary: "rgba(248, 251, 255, 0.72)",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: ["Inter", "Poppins", "system-ui", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;