import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha, styled, SxProps, Theme, useTheme } from "@mui/material/styles";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useColorMode } from "../contexts/color-mode";
import GitHubLogoLight from "../static/images/github-logo-light.png";
import GitHubLogoDark from "../static/images/github-logo-dark.png";
import LinkedInLogoLight from "../static/images/linkedin-logo-light.png";
import LinkedInLogoDark from "../static/images/linkedin-logo-dark.png";

interface Menu {
  label: string;
  dest: string;
}

interface AppBarProps extends React.PropsWithChildren {
  title: string;
  menu: Menu[];
  sx?: SxProps<Theme> | undefined;
}

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontFamily: "Montserrat, sans-serif",
  "&:hover": {
    background: alpha(
      theme.palette.secondary.main,
      theme.palette.mode === "light" ? 0.2 : 0.4
    ),
  },
  "&:active": {
    color:
      theme.palette.mode === "light"
        ? theme.palette.secondary.main
        : theme.palette.text.primary,
  },
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,
}));

const StyledColorModeSwitch = styled(Switch)(({ theme }) => ({
  width: 65,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(25px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.grey[400],
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.secondary.main,
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.grey[400],
    borderRadius: 10,
  },
}));

const StyledAppBar = (props: AppBarProps) => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const { title, menu, sx } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.gradient.top}, ${theme.palette.gradient.bottom});`,
      }}
    >
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.background.paper,
          ...(mobileOpen ? { boxShadow: "none" } : {}),
        }}
      >
        <Toolbar
          sx={{
            boxSizing: "border-box",
            ...(mobileOpen
              ? { width: "100%" }
              : { width: "1200px", maxWidth: "100%" }),
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: theme.spacing(2), display: { md: "none" } }}
          >
            <MenuIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              justifyContent: {
                xs: "space-between",
                md: "flex-start",
              },
            }}
          >
            <StyledLink
              key="app-bar-title"
              to={""}
              sx={{
                paddingLeft: 0,
                fontFamily: "Bungee, cursive",
                fontSize: "20px",
                "&:hover": {
                  background: "none",
                },
                "&:active": {
                  color: theme.palette.text.primary,
                },
              }}
            >
              {title}
            </StyledLink>
            <Box sx={{ display: "flex" }}>
              <a
                href="https://github.com/ickhov"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 0,
                  textDecoration: "none",
                  marginLeft: "8px",
                }}
              >
                <img
                  alt="Iev Khov's GitHub"
                  src={
                    theme.palette.mode === "light"
                      ? GitHubLogoLight
                      : GitHubLogoDark
                  }
                  height={35}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ickhov/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 0,
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
              >
                <img
                  alt="Iev Khov's LinkedIn"
                  src={
                    theme.palette.mode === "light"
                      ? LinkedInLogoLight
                      : LinkedInLogoDark
                  }
                  height={35}
                />
              </a>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {menu.map((item) => (
              <StyledLink key={item.label} to={item.dest}>
                {item.label}
              </StyledLink>
            ))}
            <StyledColorModeSwitch
              sx={{ m: 1 }}
              checked={mode === "dark"}
              onChange={toggleColorMode}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              maxWidth: "100%",
              top: "56px",
            },
            zIndex: theme.zIndex.appBar - 1,
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <List>
              {menu.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <StyledLink
                    key={item.label}
                    to={item.dest}
                    sx={{
                      borderRadius: 0,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {item.label}
                  </StyledLink>
                </ListItem>
              ))}
              <ListItem
                key="styled-color-mode-switch"
                disablePadding
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledColorModeSwitch
                  sx={{ m: 1 }}
                  checked={mode === "dark"}
                  onChange={toggleColorMode}
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: "100%",
          flexGrow: 1,
        }}
      >
        <Toolbar />
        <Box
          sx={{
            boxSizing: "border-box",
            height: { xs: "calc(100% - 56px)", md: "calc(100% - 64px)" },
            ...sx,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          width: "100%",
          minHeight: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" gutterBottom={false}>
          Made with &#10084; in Sacramento, California
        </Typography>
      </Box>
    </Box>
  );
};

export default StyledAppBar;
