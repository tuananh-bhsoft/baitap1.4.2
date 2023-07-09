import React from "react";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import Link from "@mui/material/Link";

import PrimaryButton from "../buttons/Primary";
import mainLogo from "../../assets/imgs/logos/MainLogo.svg";
import hamburgerMenu from "../../assets/icons/design-elements/HamburgerMenu.svg";
import rollToTop from "../../assets/icons/design-elements/RollToTop.svg";

const ScrollTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const StyledDrawer = styled(Box)(
  ({ theme }) => `
  padding: ${theme.spacing(1)};
  overflow: hidden;

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: ${theme.spacing(1)};
    padding-left: 5px;
    margin-top: ${theme.spacing(1)};
    letter-spacing: 0.1rem;
  }
`
);

const StyledLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.palette.txt.tertiary.medium};
  font-size: ${theme.typography.fontSize.medium};
  font-weight: 500;
  white-space: nowrap;
  transition: ${theme.transition};

  &:hover {
    color: ${theme.palette.txt.primary.light};
  }

  &.active {
    color: ${theme.palette.txt.primary.light};
    font-weight: 600;
  }
`
);

const StyledAppBar = styled(AppBar)(
  ({ theme, trigger }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${trigger ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  padding: ${theme.spacing(0)} 0;
  margin-top: ${trigger ? "0" : theme.spacing(2)};
  box-shadow: ${
    trigger ? "10px 13px 80px 14px rgba(242, 244, 255, 0.95)" : "none"
  };
  transition: ${theme.transition};

  @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
    padding: ${theme.spacing(0)} ${theme.spacing(3)};
  }
`
);

const StyledToolbar = styled(Toolbar)(
  ({ theme }) => `
  width: 100%;
  max-width: ${theme.breakpoints.values.content};
  display: flex;
  justify-content: space-between;

  .box-1 {
    display: none;
    cursor: pointer;

    .box-1__1 {
      display: none;

      @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
        display: block;
      }

      @media screen and (max-width: ${theme.breakpoints.values.tablet}) {
        display: none;
      }
    }

    @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
      display: flex;
      justify-content: space-between;
      column-gap: ${theme.spacing(3)};
    }
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: ${theme.spacing(3)};

    @media screen and (max-width: ${theme.breakpoints.values.laptop}) {
      display: none;
    }
  }
`
);

const StyledFab = styled(Fab)(
  ({ theme }) => `
  width: 36px;
  height: 36px;
  background-color: ${theme.palette.bg.primary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 50px;
  bottom: 100px;
  transition: 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${theme.palette.bg.secondary.medium};
    box-shadow: -2px 6px 16px -1px #e6e9fd;
  },
`
);

const StyledHeader = styled(Link)(
  ({ theme }) => `
  display: flex;
  height: 0;
`
);

const drawerWidth = 350;

const Header = (props) => {
  const { window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <StyledDrawer onClick={handleDrawerToggle}>
      <img className="main-logo" src={mainLogo} alt="Main logo" />
      <Box className="nav-links">
        <StyledLink className="nav-item active" href="/" underline="none">
          Home +
        </StyledLink>
        <StyledLink className="nav-item" href="/" underline="none">
          About
        </StyledLink>
        <StyledLink className="nav-item" href="/" underline="none">
          Service
        </StyledLink>
        <StyledLink className="nav-item" href="/" underline="none">
          Gallery
        </StyledLink>
        <StyledLink className="nav-item" href="/" underline="none">
          Blog
        </StyledLink>
      </Box>
    </StyledDrawer>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledHeader>
      <CssBaseline />
      <ElevationScroll {...props}>
        <StyledAppBar component="nav" trigger={trigger}>
          <StyledToolbar disableGutters>
            <img className="main-logo" src={mainLogo} alt="Main logo" />
            <Box className="box-1">
              <img
                className="hamburger"
                src={hamburgerMenu}
                alt="Hamburger"
                onClick={handleDrawerToggle}
              />
              <Box className="box-1__1">
                <PrimaryButton>Contact</PrimaryButton>
              </Box>
            </Box>
            <Box className="nav-links">
              <StyledLink className="nav-item active" href="/" underline="none">
                Home +
              </StyledLink>
              <StyledLink className="nav-item" href="/" underline="none">
                About
              </StyledLink>
              <StyledLink className="nav-item" href="/" underline="none">
                Service
              </StyledLink>
              <StyledLink className="nav-item" href="/" underline="none">
                Gallery
              </StyledLink>
              <StyledLink className="nav-item" href="/" underline="none">
                Blog
              </StyledLink>
              <PrimaryButton>Contact</PrimaryButton>
            </Box>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props} sx={{ zIndex: "100" }}>
        <StyledFab size="small" aria-label="scroll back to top">
          <img src={rollToTop} alt="Roll to top button" />
        </StyledFab>
      </ScrollTop>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </StyledHeader>
  );
};

export default Header;
