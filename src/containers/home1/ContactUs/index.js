import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CallToActionButton from "../../../components/buttons/CallToAction";
import CssTextField from "../../../components/CssTextField";
import contactAnimation from "../../../assets/imgs/contact/ContactAnimations.svg";

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

const StyledContactUs = styled(Typography)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${theme.spacing(3)};
  margin-top: ${theme.spacing(8)};

  .section-content {
    flex: 1;

    img {
      max-width: 100%;
    }
  }

  .section-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: ${theme.spacing(0)};
    align-items: flex-start;
    flex: 1;

    #form {
      .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: ${theme.spacing(3)};
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
    & {
      flex-direction: column;
      row-gap: ${theme.spacing(6)};
      padding: 0 ${theme.spacing(3)};

      .section-info {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.tablet}) {
  }

  @media screen and (max-width: ${theme.breakpoints.values.mobile}) {
    .section-info {
      #form {
        .name {
          flex-direction: column;
        }
      }
    }
  }
`
);

const ContactUs = () => {
  return (
    <StyledContactUs>
      <Box className="section-content">
        <img src={contactAnimation} alt="Contact us" maxWidth="100%" />
      </Box>
      <Box className="section-info">
        <StyledSectionHeader className="section-header">
          Contact Us
        </StyledSectionHeader>
        <StyledSectionTitle className="section-title" sx={{ width: "80%" }}>
          Send your inquiry to our expert team
        </StyledSectionTitle>
        <StyledSectionDescription className="section-description">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </StyledSectionDescription>
        <form action="/" method="POST" id="form">
          <Box className="name">
            <CssTextField
              id="outlined-basic"
              label="First name"
              variant="outlined"
              sx={{
                marginTop: 3,
              }}
            />
            <CssTextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              sx={{
                marginTop: 3,
              }}
            />
          </Box>
          <CssTextField
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            type="email"
            fullWidth
            sx={{
              marginTop: 3,
            }}
          />
          <CssTextField
            id="outlined-basic"
            label="Subject message"
            variant="outlined"
            fullWidth
            sx={{
              marginTop: 3,
            }}
          />
          <CssTextField
            id="outlined-basic"
            label="Your inquiry here"
            variant="outlined"
            fullWidth
            multiline
            cols={30}
            rows={10}
            sx={{
              marginY: 3,
            }}
          />
          <CallToActionButton>Send Message</CallToActionButton>
        </form>
      </Box>
    </StyledContactUs>
  );
};

export default ContactUs;
