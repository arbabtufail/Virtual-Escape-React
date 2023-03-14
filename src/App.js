import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginRoute from "containers/routes/login/Login";
import PrivateRoutes from "containers/routes/PrivateRoutes";
import Home from "containers/routes/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<LoginRoute />} />
      </Routes>
    </div>
  );
}

export default App;
