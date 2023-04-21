import styled from "styled-components";
import logo from "../assets/logo.svg";

export default function Home({ setIsHome }) {
  return (
    <Container>
      <img src={logo} alt="logo do zap recall" />
      <h1>ZapRecall</h1>
      <button onClick={() => setIsHome(false)}>Iniciar Recall!</button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  img {
    width: 136px;
    height: 161px;
  }

  h1 {
    color: #fff;
    font: 36px/45px "Righteous", cursive;
    letter-spacing: -0.012em;
  }

  button {
    width: 246px;
    height: 54px;

    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    color: #d70900;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }
`;
