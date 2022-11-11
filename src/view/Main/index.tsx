import React from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();
  return (
    <AppContainer>
      <button onClick={() => navigate("/test")}>클릭!</button>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Main;
