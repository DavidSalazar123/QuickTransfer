import React from "react";
import HomePage from "./pages/HomePage";
import SendPage from "./pages/SendPage";
import ReceivePage from "./pages/ReceivePage";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename={"/"}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/send" element={<SendPage />} />
        <Route path="/receive" element={<ReceivePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
