import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import professor1 from "../../../assets/imgs/professional/unsplash_pTrhfmj2jDA.png";
import professor2 from "../../../assets/imgs/professional/unsplash_FVh_yqLR9eA.png";
import professor3 from "../../../assets/imgs/professional/unsplash_mEZ3PoFGs_k.png";
import twitter from "../../../assets/icons/socials/Twitter.svg";
import facebook from "../../../assets/icons/socials/Facebook.svg";
import insta from "../../../assets/icons/socials/Instagram.svg";

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

const StyledCardHeader = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.txt.secondary};
  font-size: ${theme.typography.fontSize.m};
  line-height: 125%;
  letter-spacing: normal;
  font-weight: 600;
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
`
);

const StyledProfessionalTeams = styled(Box)(
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
  }

  .section-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: ${theme.spacing(6)};

    .expert-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: ${theme.palette.bg.white};
      padding: 50px;
      border-radius: 40px;
      box-shadow: 0 25px 50px 25px ${theme.palette.shadow.primary};
      transition: ${theme.transition};

      img {
        max-width: 146px;
        max-height: 146px;
        margin: ${theme.spacing(3)} 0;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        
        .social-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          column-gap: ${theme.spacing(3)};
          margin: ${theme.spacing(3)} 0;

          .social-icon {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${theme.palette.bg.white};
            padding: 12px;
            border-radius: 50px;
            box-shadow: -2px 6px 16px -1px ${theme.palette.shadow.secondary};
            transition: ${theme.transition};

            img {
              width: 24px;
              height: 24px;
              margin: 0;
            }

            &:hover {
              cursor: pointer;
              box-shadow: 0px 25px 50px 25px ${theme.palette.shadow.secondary};
            }
          }
        }
      }

      &:first-child {
        background: transparent;
        position: relative;
        right: -30px;
        box-shadow: none;
      }

      &:last-child {
        background: transparent;
        position: relative;
        right: 30px;
        box-shadow: none;
      }
    }
  }

  @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
    & {
      padding: 0 ${theme.spacing(3)};

      .section-content {
        flex-direction: column;

        .expert-card {
          width: 100%;

          &:first-child {
            position: static;
          }

          &:last-child {
            position: static;
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

const ProfessionalTeams = () => {
  return (
    <StyledProfessionalTeams>
      <Box className="section-info">
        <StyledSectionHeader className="section-header">
          Professional Teams
        </StyledSectionHeader>
        <StyledSectionTitle className="section-title">
          The Professional Expert
        </StyledSectionTitle>
        <StyledSectionDescription className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </StyledSectionDescription>
      </Box>
      <Box className="section-content">
        <Box className="expert-card">
          <img
            src={professor1}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box className="card-info">
            <StyledCardHeader className="card-header">Surgeon</StyledCardHeader>
            <StyledCardTitle className="card-title">
              Briyan Nevalli
            </StyledCardTitle>
            <StyledCardDescription className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </StyledCardDescription>
            <Box className="social-links">
              <Box className="social-icon">
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="expert-card">
          <img
            src={professor2}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box className="card-info">
            <StyledCardHeader className="card-header">
              Dermatologist
            </StyledCardHeader>
            <StyledCardTitle className="card-title">
              Bella Sebastian
            </StyledCardTitle>
            <StyledCardDescription className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </StyledCardDescription>
            <Box className="social-links">
              <Box className="social-icon">
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="expert-card">
          <img
            src={professor3}
            alt="Card"
            style={{
              maxWidth: "146px",
              maxHeight: "146px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
          <Box className="card-info">
            <StyledCardHeader className="card-header">
              Stylist expert
            </StyledCardHeader>
            <StyledCardTitle className="card-title">
              Lilly Adams
            </StyledCardTitle>
            <StyledCardDescription className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </StyledCardDescription>
            <Box className="social-links">
              <Box className="social-icon">
                <img
                  src={twitter}
                  alt="Twitter"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
              <Box className="social-icon">
                <img
                  src={insta}
                  alt="Instagram"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledProfessionalTeams>
  );
};

export default ProfessionalTeams;
