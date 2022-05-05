import styled from "styled-components";

const ShowImage = ({ fighter, displayImg, eventHandle, order }) => {
  return (
    <>
      {fighter.length > 0 && (
        <div className="imgPair1">
          <img
            className="imgContents"
            name={displayImg[order].name}
            src={displayImg[order].img}
            alt="img"
            onClick={eventHandle}
            style={{ width: "500px", height: "500px" }}
          />
          <div className="imgName">{fighter[order].name}</div>
        </div>
      )}
    </>
  );
};

export default ShowImage;
