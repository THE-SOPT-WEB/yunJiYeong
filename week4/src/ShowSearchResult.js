import React from "react";
import styled from "styled-components";
import NoResult from "./NoResult";
import ShowLoading from "./ShowLoading";

const ShopListContainer = styled.li`
  background-color: white;
  margin: 10px;
  border: solid 1px darkgray;
  border-radius: 10px;
  padding: 0 0 10px 0;
  display: flex;
  box-shadow: 1px 1px 1px 1px gray;
`;

const LeftList = styled.div`
  width: 60%;
`;

const RightList = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ShopName = styled.div`
  color: black;
  padding: 10px 0 0 10px;
  font-size: 20px;
  font-weight: 700;
`;

const ShopNumber = styled.div`
  color: orange;
  padding: 0 10px 0px 10px;
  font-size: 15px;
  margin: 0;
`;

const ShopLink = styled.a`
  color: lightgray;
  font-size: 10px;
  padding: 0 0 0px 10px;
  font-weight: 700;
`;

const ShopAddress = styled.div`
  color: gray;
  padding-left: 10px;
  font-size: 15px;
`;

const Distance = styled.div`
  color: orange;
  font-size: 15px;
  font-weight: 900;
  text-align: center;
`;

const ShowSearchResult = ({ isLoading, shopList }) => {
  const showShopList = () => {
    if (isLoading) {
      return <ShowLoading />;
    }
    if (shopList && shopList.length === 0) {
      return <NoResult />;
    }
    return shopList.map((shop) => (
      <ShopListContainer>
        <LeftList>
          <ShopName>{shop.place_name}</ShopName>
          <ShopNumber>{shop.phone}</ShopNumber>
          <ShopAddress>{shop.road_address_name}</ShopAddress>
          <ShopLink target="_blank" href={shop.place_url}>
            {shop.place_url}
          </ShopLink>
        </LeftList>
        <RightList>
          <Distance>{shop.distance}m</Distance>
        </RightList>
      </ShopListContainer>
    ));
  };

  return <>{showShopList()}</>;
};

export default ShowSearchResult;
