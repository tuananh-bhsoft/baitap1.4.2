import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "./Slider";
import MainServices from "./MainServices";
import AboutUs from "./AboutUs";
import ProfessionalTeams from "./ProfessionalTeams";
import ContactUs from "./ContactUs";
import slideBG from "../../assets/imgs/bgs/SlideBackground.png";
import bg1 from "../../assets/imgs/bgs/BG1.png";
import bg2 from "../../assets/imgs/bgs/BG2.png";
import footerBG from "../../assets/imgs/bgs/FooterBG.png";

const StyledHome1 = styled(Box)(
  ({ theme }) => `  
  &.MuiBox-root {
    padding: 0;
  }

  .bg-section-1 {
    background: url(${slideBG}) no-repeat top left;
    background-size: 90% 100%;
  }
  
  .bg-section-2 {
    background: url(${bg1}) no-repeat bottom right;
    background-size: 60% 60%;
  }
  
  .bg-section-3 {
    background: url(${bg2}) no-repeat bottom left;
    background-size: 80% 60%;
  }
  
  .bg-section-4 {
    background: url(${footerBG}) no-repeat center bottom;
    background-size: cover;
  }
  
  .container {
    max-width: ${theme.breakpoints.values.content};
    margin: 0 auto;
  }
`
);

const Home1 = () => {
  return (
    <StyledHome1>
      <Header />

      <Box className="bg-section-1">
        <Container className="container" disableGutters>
          <Slider />
        </Container>
      </Box>

      <Box className="bg-section-2">
        <Container className="container" disableGutters>
          <MainServices />
          <AboutUs />
        </Container>
      </Box>

      <Box className="bg-section-3">
        <Container className="container" disableGutters>
          <ProfessionalTeams />
          <ContactUs />
        </Container>
      </Box>

      <Box className="bg-section-4">
        <Footer />
      </Box>
    </StyledHome1>
  );
};

export default Home1;
