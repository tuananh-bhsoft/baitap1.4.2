import styled from "@emotion/styled";

import Home1 from "./containers/home1";

const StyledApp = styled.div`
  font-family: "Poppins";
  font-weight: 600;
  letter-spacing: 0.1em;
`;

const App = () => {
  return (
    <StyledApp>
      <Home1 />
    </StyledApp>
  );
};

export default App;
