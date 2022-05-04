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
    <>
      <h2 className="roundTitle">
        <span className="roundText">{round}</span>
        <span className="otherText">th Round❗️</span>
      </h2>
      <div className="imgContainer">
        {fighter.length > 0 && (
          <div className="imgPair1">
            <img
              className="imgContents"
              name={displayImg[0].name}
              src={displayImg[0].img}
              alt="img"
              onClick={eventHandle}
            />
            <div className="imgName">{fighter[0].name}</div>
          </div>
        )}
        {fighter.length > 0 && (
          <div className="imgPair2">
            <img
              className="imgContents"
              name={displayImg[1].name}
              src={displayImg[1].img}
              alt="img"
              onClick={eventHandle}
            />
            <div className="imgName">{fighter[1].name}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default FightGame;
