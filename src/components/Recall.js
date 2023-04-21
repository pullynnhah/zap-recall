import { useState } from "react";

import styled from "styled-components";

import Banner from "./recall/Banner";
import Cards from "./recall/Cards";
import Result from "./recall/Result";

import { DECK } from "../constants/deck";

export default function Recall({ setIsHome }) {
  // status: play, playing, grading, graded
  // scores: wrong, partial, right
  const [cards, setCards] = useState(DECK.sort(() => Math.random() - 0.5));
  const [scores, setScores] = useState([]);
  return (
    <Container>
      <Banner setIsHome={setIsHome} />
      <Cards cards={cards} setCards={setCards} scores={scores} setScores={setScores} />
      <Result scores={scores} cardsLength={cards.length} />
    </Container>
  );
}

const Container = styled.div``;
