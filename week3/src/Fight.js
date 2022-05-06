import { useEffect } from "react";
import styled from "styled-components";
import sword from "./img/sword.png";
import crown from "./img/crown.png";
import RetryGame from "./RetryGame";
import ShowImage from "./ShowImage.js";
import { keyframes } from "styled-components";

const PageTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  color: black;
  display: flex;
  justify-content: center;
  font-size: 30px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
  margin-top: 0;
`;

const EnlangeImage = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2.0);
  }
  `;

const ImgContents = styled.img`
  overflow: hidden;
  border-radius: 250px;
  border: 12px solid rgb(255, 186, 0);
  background-color: black;
  margin: 0 5px;
  height: 500px;
  width: 500px;
`;

const RoundTitle = styled.h2`
  text-align: center;
  margin: 0;
  /* padding-top: 20px; */
  color: black;
  display: flex;
  justify-content: center;
  font-size: 60px;
`;

const RoundText = styled.span`
  font-size: 80px;
  color: red;
`;

const OtherText = styled.span`
  padding-top: 15px;
`;

const CrownImg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 47%;
  top: 10%;
`;
const VsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LeftSwordCross = keyframes`
  0% {
    margin-top: 0;
  }
  50% {
    margin-top:-100px;
    margin-left: 20px;
  }
  100% {
    margin-top: 0;
  }
  `;

const RightSwordCross = keyframes`
0% {
  margin-top: 0;
}
50% {
  margin-top:-100px;
  margin-right: 20px;
}
100% {
  margin-top: 0;
}
`;

const LeftSword = styled.img`
  /* position: absolute; */
  height: 100px;
  width: 100px;
  animation: ${LeftSwordCross} 2s 1s infinite;
  transform: translate(-20px) rotate(5deg);
`;

const RightSword = styled.img`
  position: absolute;
  left: 20px;
  height: 100px;
  width: 100px;
  transform: scaleX(-1) rotate(5deg);
  animation: ${RightSwordCross} 2s 1s infinite;
`;

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
      <>
        <PageTitle>{fighter[0].name}</PageTitle>
        <CrownImg src={crown}></CrownImg>
        <ImgContainer>
          <ImgContents
            src={fighter[0].img}
            alt="lastImg"
            style={{ width: "400px", height: "400px" }}
          />
        </ImgContainer>
        <RetryGame />
      </>
    );
  }

  return (
    <>
      <PageTitle>Who is the Best Jjinny?</PageTitle>
      <RoundTitle>
        <RoundText>💥{round}</RoundText>
        <OtherText>th Round💥</OtherText>
      </RoundTitle>
      <ImgContainer>
        <ShowImage
          fighter={fighter}
          eventHandle={eventHandle}
          displayImg={displayImg}
          order={0}
          ImgContents={ImgContents}
        />
        <VsContainer>
          <LeftSword src={sword} alt="sword"></LeftSword>
          <RightSword src={sword} alt="sword"></RightSword>
        </VsContainer>

        <ShowImage
          fighter={fighter}
          eventHandle={eventHandle}
          displayImg={displayImg}
          order={1}
          ImgContents={ImgContents}
        />
      </ImgContainer>
    </>
  );
};

export default FightGame;
