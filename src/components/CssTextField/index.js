import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)(
  ({ theme }) => `
  width: 100%;

  & label {
    color: #c5c5c5;
    font-size: 1rem;
    font-weight: 400;
    padding-left: 5px;
  }

  & .MuiInputBase-root.MuiOutlinedInput-root {
    border-radius: 15px;

    & fieldset {
      border-color: #d9ddfe;
      background-color: white;
    }
  }
`
);

export default CssTextField;
