import styled from "styled-components";
import { useRef } from "react";

const ImgPair = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const ImgName = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: "Nanum Gothic", sans-serif;
  // text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color: black;
`;

const ShowImage = ({
  fighter,
  displayImg,
  eventHandle,
  order,
  ImgContents,
}) => {
  return (
    <>
      {fighter.length > 0 && (
        <ImgPair>
          <ImgContents
            name={displayImg[order].name}
            src={displayImg[order].img}
            alt="img"
            onClick={eventHandle}
            style={{ width: "500px ", height: "500px" }}
          />
          <ImgName>{fighter[order].name}</ImgName>
        </ImgPair>
      )}
    </>
  );
};

export default ShowImage;
