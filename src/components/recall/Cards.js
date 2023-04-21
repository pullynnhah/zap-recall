import styled from "styled-components";

import Card from "./cards/Card";

export default function Cards({ cards, setCards, scores, setScores }) {
  function updateCards(index, status, score) {
    if (status === "graded") {
      setCards(cards.toSpliced(index, 1, { ...cards[index], status, score }));
      setScores([...scores, score]);
    } else setCards(cards.toSpliced(index, 1, { ...cards[index], status }));
  }

  return (
    <Container>
      {cards.map((card, index) => (
        <Card key={card.question} id={index + 1} {...card} updateCards={updateCards} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  padding-bottom: 200px;
`;
