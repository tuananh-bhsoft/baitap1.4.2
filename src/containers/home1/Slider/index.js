import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CallToActionButton from "../../../components/buttons/CallToAction";
import frame1 from "../../../assets/imgs/slide/Frame1.svg";

const StyledSlideTitle = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.primary.medium};
  font-size: ${theme.typography.fontSize.xl};
  line-height: 125%;
  letter-spacing: normal;
  font-weight: 600;
`
);

const StyledSlideDescription = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.primary.medium};
  font-size: ${theme.typography.fontSize.m};
  font-weight: normal;
  margin-top: ${theme.spacing(1)};
`
);

const StyledSlider = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .slide-container {
    padding: ${theme.spacing(6)} 0;
    margin-top: ${theme.spacing(7)}}

    .slide {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: ${theme.spacing(3)};

      .slide-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex: 1;

        .title {
        }

        .description {
        }

        .more-details {
          margin-top: ${theme.spacing(3)};
        }
      }

      .slide-img {
        flex: 1;

        img {
          width: 100%;
        }
      }
    }

  .slide-marker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: ${theme.spacing(0)};

    .marker {
      background: ${theme.palette.bg.tertiary};
      height: 3px;
      width: 15px;
      border-radius: 50px;

      &.active {
        background: ${theme.palette.bg.secondary.light};
        height: 8px;
        width: 25px;
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
    & {
      padding: 0 ${theme.spacing(3)};

      .slide-container {
        .slide {
          .slide-info {
            align-items: center;
            text-align: center;
          }

          .slide-img {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.tablet}) {
  }

  @media screen and (max-width: ${theme.breakpoints.values.mobile}) {
  }
`
);

const Slider = () => {
  return (
    <StyledSlider>
      <Box className="slide-container">
        <Box className="slide">
          <Box className="slide-info">
            <StyledSlideTitle className="title">
              Clinic & beauty consultant
            </StyledSlideTitle>
            <StyledSlideDescription className="description">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </StyledSlideDescription>
            <Box className="more-details">
              <CallToActionButton>More Details</CallToActionButton>
            </Box>
          </Box>
          <Box className="slide-img">
            <img src={frame1} alt="Slide" />
          </Box>
        </Box>
      </Box>

      <Box className="slide-marker">
        <Box className="marker"></Box>
        <Box className="marker active"></Box>
        <Box className="marker"></Box>
      </Box>
    </StyledSlider>
  );
};

export default Slider;
