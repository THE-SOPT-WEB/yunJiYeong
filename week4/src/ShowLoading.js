import React from "react";
import styled from "styled-components";
import "./App.css";

// const ShopListContainer = styled.li`
//   background-color: white;
//   margin: 10px;
//   border: solid 1px darkgray;
//   border-radius: 10px;
//   padding: 0 0 10px 0;
//   display: flex;
//   box-shadow: 1px 1px 1px 1px gray;
//   height: 80px;
// `;

// const LoadingAni = keyframes`
// 0% {

//   }
// 50%,100% {
//     transform: translateX(460px);
//   }
// }
// `

// const ShowLoading = ({ shopList }) => {
//   return shopList.map((shop) => <ShopListContainer></ShopListContainer>);
// };

// export default ShowLoading;

const ShowLoading = () => {
  return (
    <div className="box">
      <div className="loader5"></div>
    </div>
  );
};

export default ShowLoading;
