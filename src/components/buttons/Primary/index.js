import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const PrimaryButton = styled(Button)(
  ({ theme }) => `
  background: ${theme.palette.bg.primary};
  color: ${theme.palette.txt.white};
  font-size: ${theme.typography.fontSize.m};
  padding: 12px 40px;
  border: none;
  border-radius: 50px;
  text-transform: none;
  letter-spacing: 0.1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.bg.secondary.medium};
  },
`
);

export default PrimaryButton;
