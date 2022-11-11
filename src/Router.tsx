import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import styled from "styled-components";

import Header from "./component/Header";
import Main from "./view/Main";
import Test from "./view/Test";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Contents>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Contents>
      </BrowserRouter>
    </>
  );
};

export default Router;

const Contents = styled.div`
  position: relative;
  height: 100%;
  padding-top: var(--headerHeight);
  overflow-y: auto;
`;
