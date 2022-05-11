import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const PageTitle = styled.h1`
  background-color: yellow;
  font-size: 20px;
  text-align: center;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchTitle = styled.div`
  font-size: 20px;
  text-align: center;
`;

const SearchBar = styled.input`
  margin: 0 50px 20px 50px;
`;

const SearchBtn = styled.button`
  margin: 0 150px;
`;

const ShowResult = styled.div`
  border: solid 2px black;
  margin: 10px;
  height: 100%;
`;
function App() {
  const [shopList, setShopList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  async function showBeerShop(inputValue) {
    const result = await axios
      .get("https://dapi.kakao.com/v2/local/search/keyword", {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          query: inputValue + " " + "맥주",
        },
      })
      .then((result) => {
        setShopList(result.data.documents);
      });
  }

  const clickHandle = (e) => {
    showBeerShop(inputValue);
  };

  return (
    <>
      <PageTitle>Jjiny와 함께하는 🍺맥주🍺 데이뚜~💛</PageTitle>
      <SearchSection>
        <SearchTitle>❤️Oppa❤️ 우리 어디루가?</SearchTitle>
        <SearchBar onChange={changeInput} />
        <SearchBtn onClick={clickHandle}>Go</SearchBtn>
      </SearchSection>
      <ShowResult clickHandle={clickHandle} />
      {shopList.length &&
        shopList.map((shop) => {
          return (
            <div>
              <div>{shop.place_name}</div>
              <div>{shop.phone}</div>
              <a>{shop.place_url}</a>
            </div>
          );
        })}
    </>
  );
}

export default App;
