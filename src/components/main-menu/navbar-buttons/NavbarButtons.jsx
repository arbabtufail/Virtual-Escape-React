import "./NavbarButtons.styles.scss";
import Button from "components/ui/button/Button";
import LogOutImage from "assets/icons/logout.png";
import ConnectionsImage from "assets/icons/connections.png";
import HamIcon from "assets/icons/ham.png";

const NavbarButtons = () => {
  return (
    <div class="main-menu-navbar-right-top">
      <Button buttonClass="connection-display-button">
        <img class="img3" src={ConnectionsImage} alt="" />6 CONNECTIONS
      </Button>
      <Button buttonClass="log-out-button">
        <img class="img4" src={LogOutImage} alt="" />
        LOG OUT
      </Button>
      <Button buttonClass="hamButton">
        <img class="hamburger-button" src={HamIcon} alt="" />
      </Button>
    </div>
  );
};

export default NavbarButtons;
