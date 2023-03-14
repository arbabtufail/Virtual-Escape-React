import "./Login.styles.scss";
import Navbar from "components/shared/navbar/Navbar";
import Footer from "components/login/footer/Footer";
import BlurredFrame from "components/login/blurred-frame/BlurredFrame";
import { useContext } from "react";
import { AuthContext } from "context/auth-context/AuthContext";

const LoginScreen = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("here is in Login sreen isAuth:  ", isAuthenticated);
  return (
    <div className="ve-login-screen">
      <Navbar halfNavbar={true} />
      <BlurredFrame />
      <Footer />
    </div>
  );
};

export default LoginScreen;
