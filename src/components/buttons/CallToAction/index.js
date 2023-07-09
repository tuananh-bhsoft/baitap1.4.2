import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const CallToActionButton = styled(Button)(
  ({ theme }) => `
  background: ${theme.palette.bg.primary};
  color: ${theme.palette.txt.white};
  font-size: ${theme.typography.fontSize.m};
  padding: 12px 40px;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 17px 22px ${theme.palette.bg.tertiary};
  transition: ${theme.transition};
  text-transform: none;
  letter-spacing: 0.1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.bg.secondary.medium};
    box-shadow: 0px 25px 50px 25px ${theme.palette.shadow.secondary};
  }
`
);

export default CallToActionButton;
