import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import FightGame from "./Fight";
import CookJjin from "./img/CookJjin.png";
import CoolJjin from "./img/CoolJjin.png";
import CryJjin from "./img/CryJjin.png";
import FuckJjin from "./img/FuckJjin.png";
import HyumJjin from "./img/HyumJjin.png";
import MacJjin from "./img/MacJjin.png";
import ShyJjin from "./img/ShyJjin.png";
import TropyJjin from "./img/TropyJjin.png";

const fighterImgs = [
  {
    img: CookJjin,
    name: "요리하는 남자 찌니",
  },
  {
    img: CoolJjin,
    name: "쿨한 남자 찌니",
  },
  {
    img: CryJjin,
    name: "눈물 흘리는 남자 찌니",
  },
  {
    img: HyumJjin,
    name: "먼혐지니",
  },
  {
    img: MacJjin,
    name: "맥북 가진남자 찌니",
  },
  {
    img: ShyJjin,
    name: "부끄러운 남자 찌니",
  },
  {
    img: TropyJjin,
    name: "상받는 남자 찌니",
  },
  {
    img: FuckJjin,
    name: "뻐킹 멋진남자 찌니",
  },
];

function App() {
  const [fighter, setFighter] = useState(fighterImgs);

  const [winImg, setWinImg] = useState([]);

  const [round, setRound] = useState(0);

  const eventHandle = (e) => {
    setWinImg([
      ...winImg,
      {
        img: e.target.src,
        name: e.target.name,
      },
    ]);
    setFighter(fighter.slice(2));
  };

  return (
    <>
      <h1 className="pageTitle">Who is the Best Jjinny?</h1>
      <h2 className="roundTitle">{round}th Round❗️</h2>
      <FightGame
        fighter={fighter}
        setFighter={setFighter}
        winImg={winImg}
        setWinImg={setWinImg}
        eventHandle={eventHandle}
        round={round}
        setRound={setRound}
      />
    </>
  );
}

export default App;
