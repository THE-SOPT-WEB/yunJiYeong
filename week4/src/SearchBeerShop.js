import React from "react";
import styled from "styled-components";

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchTitle = styled.div`
  font-size: 20px;
  text-align: center;
  font-family: "HS-Regular";
  color: white;
  text-shadow: -2px 0 orange, 0 2px orange, 2px 0 orange, 0 -2px orange;
`;

const SearchBar = styled.input`
  margin: 0 50px 10px 50px;
  border: solid 2px #fff4e1;
  height: 25px;
  width: 200px;
  border-radius: 5px;
`;

const SearchBtn = styled.button`
  height: 20%;
  width: 20%;
  background-color: white;
  color: orange;
  font-weight: 900;
  font-size: 20px;
  margin: 0 150px;
  border: solid 2px #fff4e1;
  border-radius: 30px;
  cursor: pointer;
`;

const IsBasedLocation = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const IsBasedText = styled.div`
  color: black;
  font-family: "ACCchildrenheartOTF-Regular";
`;

const IsBasedCheck = styled.input`
  color: black;
`;

const SearchBeerShop = ({
  isChecked,
  setIsChecked,
  inputValue,
  setInputValue,
  setIsLoading,
  getNearBeerShop,
  showBeerShop,
}) => {
  const inputHandle = (e) => {
    if (isChecked === true) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
    console.log(isChecked);
  };

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const getShopList = async () => {
    try {
      setIsLoading(true);
      if (isChecked) {
        getNearBeerShop();
      } else {
        showBeerShop(inputValue);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <SearchSection>
      <SearchTitle>❤️Oppa❤️ 우리 어디루가❓</SearchTitle>
      <SearchBar onChange={changeInput} disabled={isChecked} />
      <IsBasedLocation>
        <IsBasedText>우리집 근처로 갈끄야</IsBasedText>
        <IsBasedCheck type="checkbox" onClick={inputHandle}></IsBasedCheck>
      </IsBasedLocation>
      <SearchBtn onClick={getShopList}>Go</SearchBtn>
    </SearchSection>
  );
};

export default SearchBeerShop;
