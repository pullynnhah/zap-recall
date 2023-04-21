import styled from "styled-components";
import party from "../../../assets/party.svg";
import sad from "../../../assets/sad.svg";

export default function ResultMessage({ zap }) {
  return zap ? (
    <>
      <Title>
        <img src={party} alt="party" />
        <h2>Parabéns!</h2>
      </Title>
      <Message>
        Você não esqueceu de
        <br />
        nenhum flashcard!
      </Message>
    </>
  ) : (
    <>
      <Title>
        <img src={sad} alt="sad" />
        <h2>Putz...</h2>
      </Title>
      <Message>
        Ainda faltam alguns...
        <br />
        Mas não desanime!
      </Message>
    </>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding-top: 8px;

  img {
    width: 23px;
    height: 23px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
`;

const Message = styled.p`
  margin: 14px;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;
