import "./CardList.styles.scss";
import Card from "components/main-menu/card/card";
import OurGamesLogo from "assets/icons/ourgames.png";
import StartGameLogo from "assets/icons/startgame.png";
import LeaderBoardLogo from "assets/icons/leaderboard.png";
import HowToPlayLogo from "assets/icons/howToPlay.png";

const CardList = () => {
  return (
    <div className="card-list">
      <Card imageUrl={OurGamesLogo}>OUR GAMES</Card>
      <Card imageUrl={LeaderBoardLogo}>LEADERBOARD</Card>
      <Card imageUrl={HowToPlayLogo}>HOW TO PLAY</Card>
      <Card imageUrl={StartGameLogo}>START GAME</Card>
    </div>
  );
};

export default CardList;
