import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import animation1 from "../../../assets/imgs/service/Animation1.svg";
import animation2 from "../../../assets/imgs/service/Animation2.svg";
import animation3 from "../../../assets/imgs/service/Animation3.svg";

const StyledSectionHeader = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.secondary};
  font-size: ${theme.typography.fontSize.m};
  line-height: 125%;
  letter-spacing: normal;
  font-weight: 600;
`
);

const StyledSectionTitle = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.primary.medium};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 125%;
  letter-spacing: normal;
  font-weight: 600;
`
);

const StyledSectionDescription = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.tertiary.medium};
  font-size: ${theme.typography.fontSize.m};
  font-weight: 400;
`
);

const StyledCardTitle = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.primary.medium};
  font-size: ${theme.typography.fontSize.xm};
  line-height: 125%;
  letter-spacing: normal;
  margin-top: ${theme.spacing(1)};
  font-weight: 600;
`
);

const StyledCardDescription = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.tertiary.medium};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: 400;
  margin-top: ${theme.spacing(1)};
  width: 110%;
`
);

const StyledMainServices = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing(8)};

  .section-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: ${theme.spacing(0)};
    align-items: center;
    text-align: center;

    .section-title {
      width: 40%;
    }

    .section-description {
      width: 80%;
    }
  }

  .section-content {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: ${theme.spacing(5)};
    margin-top: ${theme.spacing(6)};

    .service-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: ${theme.palette.bg.white};
      padding: 50px;
      border-radius: 40px;
      box-shadow: 0 25px 50px 25px ${theme.palette.shadow.primary};
      transition: ${theme.transition};

      .card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
      }

      img {
        max-width: 166px;
        max-height: 166px;
      }

      &:hover {
        box-shadow: 0px 25px 50px 25px ${theme.palette.shadow.secondary};
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
    & {
      padding: 0 ${theme.spacing(3)};

      .section-info {
        .section-title {
          width: 60%;
        }

        .section-description {
          width: 90%;
        }
      }

      .section-content {
        grid-template-columns: repeat(2, auto);
        row-gap: ${theme.spacing(5)};
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.tablet}) {
    .section-content {
      grid-template-columns: auto;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.mobile}) {
    .section-info {
      .section-title {
        width: 100%;
      }

      .section-description {
        width: 100%;
      }
    }
  }
`
);

const MainServices = () => {
  return (
    <StyledMainServices>
      <Box className="section-info">
        <StyledSectionHeader className="section-header">
          Main Services
        </StyledSectionHeader>
        <StyledSectionTitle
          className="section-title"
          sx={{
            width: "40%",
          }}
        >
          Learn services to focus on your beauty
        </StyledSectionTitle>
        <StyledSectionDescription
          className="section-description"
          sx={{
            width: "80%",
          }}
        >
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </StyledSectionDescription>
      </Box>
      <Box className="section-content">
        <Box className="service-card">
          <img src={animation1} alt="Card" maxWidth="166px" maxHeight="166px" />
          <Box className="card-info">
            <StyledCardTitle className="card-title">
              Beauty consultation
            </StyledCardTitle>
            <StyledCardDescription>
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </StyledCardDescription>
          </Box>
        </Box>
        <Box className="service-card">
          <img src={animation2} alt="Card" maxWidth="166px" maxHeight="166px" />
          <Box className="card-info">
            <StyledCardTitle className="card-title">
              Skin treatments
            </StyledCardTitle>
            <StyledCardDescription>
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </StyledCardDescription>
          </Box>
        </Box>
        <Box className="service-card">
          <img src={animation3} alt="Card" maxWidth="166px" maxHeight="166px" />
          <Box className="card-info">
            <StyledCardTitle className="card-title">
              Beauty product
            </StyledCardTitle>
            <StyledCardDescription>
              Non parturient amet, feugiat tellus sagittis, scelerisque eget
              nulla turpis.
            </StyledCardDescription>
          </Box>
        </Box>
      </Box>
    </StyledMainServices>
  );
};

export default MainServices;
