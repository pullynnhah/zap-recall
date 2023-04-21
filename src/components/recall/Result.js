import styled from "styled-components";
import Icon from "./Icon";
import ResultMessage from "./result/ResultMessage";

export default function Result({ scores, cardsLength }) {
  return (
    <Footer>
      {scores.length === cardsLength && <ResultMessage zap={!scores.includes("wrong")} />}
      <p>
        {scores.length}/{cardsLength} CONCLUÍDOS
      </p>
      <Container>
        {scores.map((score, index) => (
          <Icon key={index} icon={score} />
        ))}
      </Container>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100vw;
  min-height: 70px;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  padding: 8px 0;
`;
