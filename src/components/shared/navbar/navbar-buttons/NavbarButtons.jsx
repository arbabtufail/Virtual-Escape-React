import "./NavbarButtons.styles.scss";
import Button from "components/ui/button/Button";
import LogOutImage from "assets/icons/logout.png";
import ConnectionsImage from "assets/icons/connections.png";
import HamIcon from "assets/icons/ham.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "context/AuthContainer";
import { LOGIN_ROUTE } from "containers/routes/constants";

const NavbarButtons = () => {
  const { setLogout } = useAuthContext();
  const navigate = useNavigate();

  const onClickHandleChange = () => {
    setLogout();
    navigate(LOGIN_ROUTE);
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
