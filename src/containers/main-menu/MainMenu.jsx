import "./MainMenu.styles.scss";
import Navbar from "components/shared/navbar/Navbar";
import ScreenText from "components/shared/screen-text/ScreenText";
import CardList from "components/main-menu/card-list/CardList";
const MainMenu = () => {
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
