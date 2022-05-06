import styled from "styled-components";

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RetryBtn = styled.button`
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 30px;
  border-radius: 10px;
  cursor: pointer;
`;

const retryBtnHandle = () => {
  window.location.reload();
};

const RetryGame = () => {
  return (
    <BtnContainer>
      <RetryBtn onClick={retryBtnHandle}>Try Another Jjin😤</RetryBtn>
    </BtnContainer>
  );
};

export default RetryGame;
