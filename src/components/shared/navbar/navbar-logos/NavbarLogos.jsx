import "./NavbarLogos.styles.scss";
import NavbarLogo1 from "assets/icons/logo.png";
import NavbarLogo2 from "assets/icons/logo2.png";

const NavbarLogos = () => {
  return (
    <div className="logos-container">
      <div className="logo1-div">
        <img className="logo1-img" src={NavbarLogo1} alt="Logo1" />
      </div>
      <div className="logo2-div">
        <img className="logo2-img" src={NavbarLogo2} alt="logo2" />
      </div>
    </div>
  );
};
export default NavbarLogos;
