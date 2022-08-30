import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useColorMode } from "../contexts/color-mode";
import StyledColorModeSwitch from "./styled-color-mode-switch";
import { Outlet } from "react-router-dom";
import StyledLink from "./styled-link";

interface Menu {
  label: string;
  dest: string;
}

interface AppBarProps extends React.PropsWithChildren {
  title: string;
  menu: Menu[];
  sx?: SxProps<Theme> | undefined;
}

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
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: theme.palette.text.primary,
              flexGrow: 1,
            }}
          >
            {title}
          </Typography>
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
                      textAlign: 'center'
                    }}
                  >
                    {item.label}
                  </StyledLink>
                </ListItem>
              ))}
              <ListItem key="styled-color-mode-switch" disablePadding>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <StyledColorModeSwitch
                    sx={{ m: 1 }}
                    checked={mode === "dark"}
                    onChange={toggleColorMode}
                  />
                </Box>
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
        <Typography
          variant="subtitle1"
          gutterBottom={false}
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          Made by Iev Khov
        </Typography>
      </Box>
    </Box>
  );
};

export default StyledAppBar;
