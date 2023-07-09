import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import footerLogo from "../../assets/imgs/logos/FooterLogo.svg";
import facebookLight from "../../assets/icons/socials/FacebookLight.svg";
import twitterLight from "../../assets/icons/socials/TwitterLight.svg";
import linkedinLight from "../../assets/icons/socials/LinkedinLight.svg";
import youtubeLight from "../../assets/icons/socials/YoutubeLight.svg";
import instaLight from "../../assets/icons/socials/InstagramLight.svg";
import bullet from "../../assets/icons/design-elements/Bullet.svg";

const StyledText = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.primary.slight};
  font-size: ${theme.typography.fontSize.m};
  font-weight: 400;
`
);

const StyledListHeader = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.white};
  font-size: ${theme.typography.fontSize.xm};
  font-weight: 600;
`
);

const StyledListItem = styled(Box)(
  ({ theme }) => `
  color: ${theme.palette.txt.primary.slight};
  font-size: ${theme.typography.fontSize.m};
  font-weight: 400;
  margin-top: 0;
`
);

const StyledFooter = styled(Box)(
  ({ theme }) => `
  padding-top: ${theme.spacing(8)};
  margin-top: ${theme.spacing(8)};

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: ${theme.breakpoints.values.content};
    margin: 0 auto;

    .footer-info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;

      .authorship {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        row-gap: ${theme.spacing(1)};
        flex: 1;

        .info {
          font-style: italic;
          font-size: ${theme.typography.fontSize.sm};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

          .contact-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: ${theme.spacing(3)};
          }
        }
      }

      .site-doc {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .sitemap,
        .documents {
          flex: 1;

          .list-header {
            color: ${theme.palette.txt.white};
            font-size: ${theme.typography.fontSize.xm};
          }

          .list {
            list-style-image: url(${bullet});
            padding-left: 12px;
            padding-top: 15px;
            margin: 0;

            .list-item {
              color: ${theme.palette.txt.primary.slight};
              font-size: ${theme.typography.fontSize.m};
              font-weight: 400;
              margin-top: ${theme.spacing(0)};
            }
          }
        }
      }
    }

    .footer-socials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: ${theme.spacing(6)} 0;
      column-gap: ${theme.spacing(3)};

      .social-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: ${theme.spacing(3)};

        img {
          width: 24px;
          height: 24px;
        }
      }

      .copyright {
        color: ${theme.palette.txt.primary.slight};
        font-size: ${theme.typography.fontSize.m};
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
    & {
      padding: ${theme.spacing(8)} ${theme.spacing(3)} 0 ${theme.spacing(3)};

      .footer-info {
        flex-direction: column;
        row-gap: ${theme.spacing(5)};

        .authorship {
          width: 100%;
        }

        .site-doc {
          flex-direction: column;
          row-gap: ${theme.spacing(5)};
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.tablet}) {
    .footer-socials {
      flex-direction: column;
      row-gap: ${theme.spacing(3)};
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.mobile}) {
  }
`
);

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Box className="content-wrapper">
        <Box className="footer-info">
          <Box className="authorship">
            <img src={footerLogo} alt="Footer logo" />
            <StyledText>
              <Typography sx={{ display: "inline", fontWeight: "700" }}>
                Beautice
              </Typography>{" "}
              is a Beauty Clinic WordPress Theme.
            </StyledText>
            <Box className="info">
              <StyledText>Baker Steet 101, NY, United States.</StyledText>
              <Box className="contact-info">
                <StyledText>+521 569 8966.</StyledText>
                <StyledText>mail@company.com.</StyledText>
              </Box>
            </Box>
          </Box>
          <Box className="site-doc">
            <Box className="sitemap">
              <StyledListHeader className="list-header">Pages</StyledListHeader>
              <Box component="ul" className="list">
                <StyledListItem component="li" className="list-item">
                  Home
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  About
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Services
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Gallery
                </StyledListItem>
                <Box component="li" className="list-item">
                  Team
                </Box>
              </Box>
            </Box>
            <Box className="documents">
              <StyledListHeader className="list-header">
                Informations
              </StyledListHeader>
              <Box component="ul" className="list">
                <StyledListItem component="li" className="list-item">
                  Terms & Conditions
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Privacy policy
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Blog
                </StyledListItem>
                <StyledListItem component="li" className="list-item">
                  Contact
                </StyledListItem>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="footer-socials">
          <Box className="social-links">
            <img
              src={facebookLight}
              alt="Facebook"
              width="24px"
              height="24px"
            />
            <img src={twitterLight} alt="Twitter" width="24px" height="24px" />
            <img
              src={linkedinLight}
              alt="Linkedin"
              width="24px"
              height="24px"
            />
            <img src={youtubeLight} alt="Youtube" width="24px" height="24px" />
            <img src={instaLight} alt="Instagram" width="24px" height="24px" />
          </Box>
          <Typography
            className="copyright"
            sx={{
              color: "txt.primary.slight",
              fontSize: "fontSize.m",
              fontWeight: "400",
            }}
          >
            © AltDesain Studio 2021 - All right reserved.
          </Typography>
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
