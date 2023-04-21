import styled from "styled-components";
import logo from "../../assets/logo.svg";

export default function Banner({ setIsHome }) {
  return (
    <Header>
      <img src={logo} alt="logo do zap recall" onClick={() => setIsHome(true)} />
      <h1 onClick={() => setIsHome(true)}>ZapRecall</h1>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 21px;

  padding: 42px 0 51px;

  img {
    width: 52px;
    height: 60px;
  }

  h1 {
    color: #fff;
    font: 36px/45px "Righteous", cursive;
    letter-spacing: -0.012em;
  }
`;
