import "./Navbar.styles.scss";
import NavbarLogos from "components/shared/navbar/navbar-logos/NavbarLogos";
import NavbarButtons from "components/shared/navbar/navbar-buttons/NavbarButtons";
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
