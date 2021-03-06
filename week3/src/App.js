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
    name: "π¨π»βπ³μλ¦¬νλ λ¨μπ¨π»βπ³ μ°λπ",
  },
  {
    img: CoolJjin,
    name: "πν©μκ°μ λ¨μπ μ°λπ",
  },
  {
    img: CryJjin,
    name: "π§λλ¬Ό νλ¦¬λ λ¨μπ§ μ°λπ",
  },
  {
    img: HyumJjin,
    name: "λ¨Όνμ§λππ",
  },
  {
    img: MacJjin,
    name: "π»λ§₯λΆ κ°μ§λ¨μπ» μ°λπ",
  },
  {
    img: ShyJjin,
    name: "πλΆλλ¬μ΄ λ¨μπ μ°λπ",
  },
  {
    img: TropyJjin,
    name: "πμλ°λ λ¨μπ μ°λπ",
  },
  {
    img: FuckJjin,
    name: "πΈλ»νΉ λ©μ§λ¨μπΈ μ°λπ",
  },
];

window.onload = function () {
  fighterImgs.sort(() => Math.random() - 0.5);
};
function App() {
  window.onload();

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
