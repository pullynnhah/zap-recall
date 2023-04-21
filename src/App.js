import { useState } from "react";
import Home from "./components/Home";
import Recall from "./components/Recall";
import styled from "styled-components";

export default function App() {
  const [isHome, setIsHome] = useState(true);
  return <Page>{isHome ? <Home setIsHome={setIsHome} /> : <Recall setIsHome={setIsHome} />}</Page>;
}

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fb6b6b;
`;
