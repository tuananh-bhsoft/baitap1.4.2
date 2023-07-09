import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CallToActionButton from "../../../components/buttons/CallToAction";
import PlayButton from "../../../components/buttons/Play";
import aboutusImg from "../../../assets/imgs/about/unsplash_LRXYS0tSyGc.png";

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

const StyledAboutUs = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${theme.spacing(3)};
  margin-top: ${theme.spacing(8)};

  .section-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: ${theme.spacing(0)};
    flex: 1;
    align-items: flex-start;

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: ${theme.spacing(3)};
      margin-top: ${theme.spacing(5)};

      .learn-more {
      }

      .watch-video {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: ${theme.spacing(0)};

        p {
          color: ${theme.palette.txt.tertiary.medium};
          font-size: ${theme.typography.fontSize.m};
        }
      }
    }
  }

  .section-content {
    flex: 1;
    width: 50%;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
    & {
      padding: 0 ${theme.spacing(3)};

      .section-info {
        align-items: center;
        text-align: center;

        .actions {
          align-self: center;

          .watch-video {
            display: none;
          }
        }
      }

      .section-content {
        display: none;
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.tablet}) {
  }

  @media screen and (max-width: ${theme.breakpoints.values.mobile}) {
  }
`
);

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Box className="section-info">
        <StyledSectionHeader className="section-header">
          About Us
        </StyledSectionHeader>
        <StyledSectionTitle className="section-title">
          We are the best beauty clinic
        </StyledSectionTitle>
        <StyledSectionDescription className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat. Id dui erat sed quam tellus in purus. Pellentesque congue
          fringilla cras tellus enim.
        </StyledSectionDescription>
        <Box className="actions">
          <Box className="learn-more">
            <CallToActionButton>Learn More</CallToActionButton>
          </Box>
          <Box className="watch-video">
            <PlayButton />
            <Typography
              sx={{
                color: "txt.tertiary.medium",
                fontSize: "fontSize.m",
                fontWeight: "600",
              }}
            >
              Watch Video
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="section-content">
        <img src={aboutusImg} alt="About us" />
      </Box>
    </StyledAboutUs>
  );
};

export default AboutUs;
