import "./NavbarButtons.styles.scss";
import Button from "components/ui/button/Button";
import LogOutImage from "assets/icons/logout.png";
import ConnectionsImage from "assets/icons/connections.png";
import HamIcon from "assets/icons/ham.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/auth-context/AuthContext";
import { useContext } from "react";

const NavbarButtons = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const onClickHandleChange = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="main-menu-navbar-right-top">
      <Button buttonClass="connection-display-button">
        <img className="img3" src={ConnectionsImage} alt="" />6 CONNECTIONS
      </Button>
      <Button buttonClass="log-out-button" onClickHandler={onClickHandleChange}>
        <img className="img4" src={LogOutImage} alt="" />
        LOG OUT
      </Button>
      <Button buttonClass="hamButton">
        <img className="hamburger-button" src={HamIcon} alt="" />
      </Button>
    </div>
  );
};

export default NavbarButtons;
