import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBeerShop from "./SearchBeerShop";
import ShowSearchResult from "./ShowSearchResult";

const PageTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const Jjinny = styled.h1`
  font-family: "HS-Regular";
  font-size: 30px;
  text-align: center;
  margin: 0;
  padding: 10px 0;
  text-shadow: -2px 0 orange, 0 2px orange, 2px 0 orange, 0 -2px orange;
  color: white;
`;

const TitleText = styled.h1`
  font-family: "HS-Regular";
  font-size: 18px;
  text-align: center;
  margin: 0;
  padding: 20px 0 0 5px;
  color: white;
  text-shadow: -2px 0 orange, 0 2px orange, 2px 0 orange, 0 -2px orange;
`;

function App() {
  const [shopList, setShopList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function showBeerShop(inputValue) {
    const result = await axios
      .get("https://dapi.kakao.com/v2/local/search/keyword", {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          x: longitude,
          y: latitude,
          query: inputValue + " " + "맥주",
        },
      })
      .then((result) => {
        setShopList(result.data.documents);
      });
  }

  const getLocation = (errHandler) => {
    if ("geolocation" in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (e) => {
            alert("please, check your HTTP connection");
            errHandler && errHandler();
          }
        );
      });
    }
  };

  async function getMyLocation() {
    const result = await getLocation();
  }
  useEffect(() => {
    getMyLocation();
  }, []);

  async function getNearBeerShop() {
    const result = await axios
      .get("https://dapi.kakao.com/v2/local/search/keyword", {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          x: longitude,
          y: latitude,
          radius: 1000,
          query: "맥주",
        },
      })
      .then((Response) => {
        setShopList(Response.data.documents);
      });
  }

  return (
    <>
      <PageTitle>
        <Jjinny>Jjinny</Jjinny>
        <TitleText>와 함께하는 🍺맥주🍺 데이뚜~💛</TitleText>
      </PageTitle>
      <SearchBeerShop
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsLoading={setIsLoading}
        getNearBeerShop={getNearBeerShop}
        showBeerShop={showBeerShop}
      />
      <ShowSearchResult isLoading={isLoading} shopList={shopList} />
    </>
  );
}

export default App;
