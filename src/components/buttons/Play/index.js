import styled from "@emotion/styled";
import Box from "@mui/material/Box";

import playIcon from "../../../assets/icons/design-elements/PolygonPlay.svg";

const StyledPlayButton = styled(Box)(
  ({ theme }) => `
  background: ${theme.palette.bg.secondary.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(1)};
  border-radius: 50px;
  transition: ${theme.transition};

  &:hover {
    cursor: pointer;
    background: ${theme.palette.bg.secondary.light};
    box-shadow: 0px 25px 50px 25px ${theme.palette.shadow.secondary};
  },
`
);

const PlayButton = () => {
  return (
    <StyledPlayButton className="play-button">
      <img src={playIcon} alt="Play button" />
    </StyledPlayButton>
  );
};

export default PlayButton;
