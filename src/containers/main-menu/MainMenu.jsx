import "./MainMenu.styles.scss";
import Navbar from "components/shared/navbar/Navbar";
import CardList from "components/main-menu/card-list/CardList";
import MenuScreenText from "components/main-menu/main-menu-screen-text/MenuScreenText";

const MainMenu = () => {
  return (
    <div className="ve-main-menu-screen">
      <Navbar halfNavbar={false} />
      <MenuScreenText className="main-menu-texts">
        <div className="main-menu-sentence1">VIRTUAL ESCAPE PRESENTS</div>
        <div className="main-menu-sentence2">TIME'S TICKING</div>
      </MenuScreenText>
      <CardList />
    </div>
  );
};
export default MainMenu;
