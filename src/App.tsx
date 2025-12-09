import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { getAuthToken } from "~/api/helpers";
import LoginPage from "~/pages/Login/Login";
import RoundRouterPage from "~/pages/Round/RoundRouter";
import RoundsListPage from "~/pages/RoundsList/RoundsList";
import theme from "~/theme";

const Protected = () => {
  const token = getAuthToken();

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Protected />}>
            <Route path="/" element={<RoundsListPage />} />
            <Route path="/rounds/:id" element={<RoundRouterPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
