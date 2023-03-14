import { Route, Routes as BrowserRouter } from "react-router-dom";
import LoginScreen from "containers/login/Login";
import MainMenu from "containers/main-menu/MainMenu";
import PrivateRoutes from "./PrivateRoutes";
import { MAIN_ROUTE, LOGIN_ROUTE } from "containers/routes/constants";

export const ROUTES = () => {
  return (
    <BrowserRouter>
      <Route element={<PrivateRoutes />}>
        <Route index path={MAIN_ROUTE} element={<MainMenu />} />
      </Route>
      <Route path={LOGIN_ROUTE} element={<LoginScreen />} />
    </BrowserRouter>
  );
};
