import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  background-color: white;
  color: orange;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;

const NoResult = () => {
  return <Text> NO RESULT</Text>;
};

export default NoResult;
