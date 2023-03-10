import "./Login.styles.scss";
import Navbar from "components/shared/navbar/Navbar";
import Footer from "components/login/footer/Footer";
import BlurredFrame from "components/login/blurred-frame/BlurredFrame";

const LoginScreen = () => {
  return (
    <div className="ve-login-screen">
      <Navbar halfNavbar={true} />
      <BlurredFrame />
      <Footer />
    </div>
  );
};

export default LoginScreen;
