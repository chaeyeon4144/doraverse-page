import "./App.css";
import Header from "./Components/Layout/Header";
import React from "react";
// 라우터 js를 작성하는 대신 라이브러리를 사용
import { BrowserRouter, Route, Routes } from "react-router-dom";

// <BrowserRouter>: 전체 라우팅 기능을 감싸는 "라우터 환경 제공자"
// <Routes>: 여러개의 <Route> 를 한곳에 모아둔 "라우터 설정 그룹"
// <Route> : 각 URL 경로 (Path)마다 어떤 컴포넌트를 렌더링할지 연결하는 "규칙"
import HomeView from "./Components/Layout/HomeViews";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
