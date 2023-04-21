import styled from "styled-components";

import right from "../../../../assets/icons/right.svg";
import partial from "../../../../assets/icons/partial.svg";
import play from "../../../../assets/icons/play.svg";
import wrong from "../../../../assets/icons/wrong.svg";

export default function Icon({ icon, flip }) {
  const icons = { play, wrong, partial, right };

  return icon === "play" ? (
    <StyledIcon onClick={flip} src={icons[icon]} />
  ) : (
    <StyledIcon src={icons[icon]} />
  );
}

const StyledIcon = styled.img`
  width: 23px;
  height: 23px;
`;
