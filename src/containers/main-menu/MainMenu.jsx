import "./MainMenu.styles.scss";
import Navbar from "components/shared/navbar/Navbar";
import ScreenText from "components/shared/screen-text/ScreenText";
import CardList from "components/main-menu/card-list/CardList";

import { AuthContext } from "context/auth-context/AuthContext";
import { useContext } from "react";

const MainMenu = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("here in main menu auth is:  ", isAuthenticated);

  return (
    <div className="ve-main-menu-screen">
      <Navbar halfNavbar={false} />
      <ScreenText className="main-menu-texts">
        <div className="main-menu-sentence1">VIRTUAL ESCAPE PRESENT</div>
        <div className="main-menu-sentence2">TIME'S TICKING</div>
      </ScreenText>
      <CardList />
    </div>
  );
};
export default MainMenu;
