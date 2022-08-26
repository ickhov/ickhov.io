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

interface Menu {
  label: string;
  onClick: () => void;
}

interface AppBarProps extends React.PropsWithChildren {
  title: string;
  menu: Menu[];
  sx?: SxProps<Theme> | undefined;
}

const StyledAppBar = (props: AppBarProps) => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const { title, menu, sx, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: theme.palette.background.paper,
          ...(mobileOpen ? { boxShadow: "none" } : {}),
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: theme.spacing(2), display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: theme.palette.text.primary }} />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: theme.palette.text.primary,
                marginLeft: theme.spacing(1),
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {menu.map((item, index) => (
              <Button
                key={item.label}
                sx={{
                  ...(index > 0 ? { marginLeft: theme.spacing(2) } : {}),
                  color: theme.palette.text.primary,
                }}
                onClick={item.onClick}
              >
                {item.label}
              </Button>
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
            display: { xs: "block", sm: "none" },
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
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={item.onClick}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
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
          height: "100vh",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            height: { xs: "calc(100% - 56px)", sm: "calc(100% - 64px)" },
            ...sx,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default StyledAppBar;
