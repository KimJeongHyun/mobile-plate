import React, { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { useHeadStore } from "@/globalStore";

const headName = {
  "/": "메인",
  "/test": "테스트",
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [
    text,
    isValidBackButton,
    isValidCloseButton,
    updateText,
    updateValidateBack,
  ] = useHeadStore((state) => [
    state.text,
    state.isValidBackButton,
    state.isValidCloseButton,
    state.updateText,
    state.updateValidateBack,
  ]);

  useLayoutEffect(() => {
    updateText(headName[`${location.pathname.toLowerCase()}`]);
    updateValidateBack(location.pathname !== "/");
  }, [location.pathname, updateText, updateValidateBack]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <HeadArea>
        {
          <ButtonBlock onClick={goBack}>
            {isValidBackButton && "<-"}
          </ButtonBlock>
        }
        <HeadText>{text}</HeadText>
        <ButtonBlock>{isValidCloseButton && "X"}</ButtonBlock>
      </HeadArea>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: var(--headerHeight);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: inherit;
  z-index: 1;
`;

const HeadArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 24em;
  gap: 2em;
  padding: 0 1em;
`;

const HeadText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ButtonBlock = styled.button`
  font-size: inherit;
  cursor: pointer;
`;
