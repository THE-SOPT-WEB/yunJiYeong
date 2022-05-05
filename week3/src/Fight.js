import { useEffect } from "react";
import vsImg from "./img/fight.png";
import ShowImage from "./ShowImage.js";

const FightGame = ({
  fighter,
  setFighter,
  winImg,
  setWinImg,
  eventHandle,
  round,
  setRound,
}) => {
  const displayImg = [fighter[0], fighter[1]];
  useEffect(() => {
    if (fighter.length === 0) {
      setFighter(winImg);
      setWinImg([]);
    }
  });

  useEffect(() => {
    if (winImg.length === 0) {
      setRound(round + 1);
    }
  }, [winImg]);

  if (fighter.length === 1) {
    return (
      <div className="imgContainer">
        <img className="imgContents" src={fighter[0].img} alt="lastImg" />
        {/* <span>{fighter[0].name}</span> */}
      </div>
    );
  }

  return (
    <>
      <h2 className="roundTitle">
        <span className="roundText">{round}</span>
        <span className="otherText">th Round❗️</span>
      </h2>
      <div className="imgContainer">
        <ShowImage
          fighter={fighter}
          eventHandle={eventHandle}
          displayImg={displayImg}
          order={0}
        />
        <div className="vsContainer">
          <img className="vsImg" src={vsImg} alt="vsImg"></img>
        </div>

        <ShowImage
          fighter={fighter}
          eventHandle={eventHandle}
          displayImg={displayImg}
          order={1}
        />
      </div>
    </>
  );
};

export default FightGame;
