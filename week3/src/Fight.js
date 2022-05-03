import { useEffect, useRef, useState } from "react";

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
        <span>{fighter[0].name}</span>
      </div>
    );
  }

  return (
    <div className="imgContainer">
      {fighter.length > 0 && (
        <div className="imgPair">
          <img
            className="imgContents"
            name={displayImg[0].name}
            src={displayImg[0].img}
            alt="img"
            onClick={eventHandle}
          />
          <span />
          {fighter[0].name}
        </div>
      )}
      {fighter.length > 0 && (
        <div className="imgPair">
          <img
            className="imgContents"
            name={displayImg[1].name}
            src={displayImg[1].img}
            alt="img"
            onClick={eventHandle}
          />
          <span />
          {fighter[1].name}
        </div>
      )}
    </div>
  );
};

export default FightGame;
