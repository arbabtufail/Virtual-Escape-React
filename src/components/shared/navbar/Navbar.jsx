import "./Navbar.styles.scss";
import NavbarLogos from "components/login/navbar-logos/NavbarLogos";
const Navbar = ({ halfNavbar }) => {
  return <div>{halfNavbar && <NavbarLogos />}</div>;
};
export default Navbar;
