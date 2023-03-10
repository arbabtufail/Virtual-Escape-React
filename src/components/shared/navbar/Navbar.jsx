import "./Navbar.styles.scss";
import NavbarLogos from "components/login/navbar-logos/NavbarLogos";
import NavbarButtons from "components/main-menu/navbar-buttons/NavbarButtons";
const Navbar = ({ halfNavbar }) => {
  return halfNavbar ? (
    <NavbarLogos />
  ) : (
    <div className="navbar">
      <NavbarLogos />
      <NavbarButtons />
    </div>
  );
};
export default Navbar;
