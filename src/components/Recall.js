import styled from "styled-components";
import Cards from "./recall/Cards";
import Banner from "./recall/Banner";
import Result from "./recall/Result";

export default function Recall({ setIsHome }) {
  return (
    <Container>
      <Banner setIsHome={setIsHome} />
      <Cards />
      <Result />
    </Container>
  );
}

const Container = styled.div``;
