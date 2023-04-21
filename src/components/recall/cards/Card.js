import styled from "styled-components";

import { COLORS } from "../../../constants/colors";

import arrow from "../../../assets/icons/arrow.svg";
import Icon from "./card/Icon";

export default function Card({ id, question, answer, status, score, updateCards }) {
  if (status === "play") {
    return (
      <SmallCard color={COLORS.grey} isPlayable={true}>
        <p>Pergunta {id}</p>
        <Icon flip={() => updateCards(id - 1, "playing")} icon={status} />
      </SmallCard>
    );
  }

  if (status === "graded") {
    let color;

    if (score === "right") color = COLORS.green;
    else if (score === "partial") color = COLORS.orange;
    else color = COLORS.red;

    return (
      <SmallCard color={color} isPlayable={false}>
        <p>Pergunta {id}</p>
        <Icon icon={score} />
      </SmallCard>
    );
  }

  return status === "playing" ? (
    <LargeCard>
      <p>{question}</p>
      <IconContainer
        src={arrow}
        alt="seta de virar"
        onClick={() => updateCards(id - 1, "grading")}
      />
    </LargeCard>
  ) : (
    <LargeCard>
      <p>{answer}</p>
      <ButtonContainer>
        <Button color={COLORS.red} onClick={() => updateCards(id - 1, "graded", "wrong")}>
          Não
          <br />
          lembrei
        </Button>
        <Button color={COLORS.orange} onClick={() => updateCards(id - 1, "graded", "partial")}>
          Quase não
          <br />
          lembrei
        </Button>
        <Button color={COLORS.green} onClick={() => updateCards(id - 1, "graded", "right")}>
          Zap!
        </Button>
      </ButtonContainer>
    </LargeCard>
  );
}

const SmallCard = styled.div`
  width: 300px;
  height: 65px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  background: #fff;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  color: ${props => props.color};

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: ${props => (props.isPlayable ? "" : "line-through")};
  }
`;

const LargeCard = styled.div`
  width: 299px;
  height: 131px;
  padding: 14px;

  position: relative;

  background: #ffffd5;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  p {
    font-size: 18px;
    line-height: 22px;
    color: #333;
  }
`;

const IconContainer = styled.img`
  position: absolute;
  bottom: 6px;
  right: 10px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 85px;
  height: 37px;

  border-radius: 5px;
  background: ${props => props.color};
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;
