import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const RefreshPage = () => {
  window.location.reload();
};

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id: string) => {
    setAnchorEl(null);

    const barHeight = "91px";
    const scrollSection = document.getElementById(id);
    console.log(scrollSection);
    if (scrollSection) {
      //had to add bar height here to account for the fixed app bar. Must be done with react.
      scrollSection.style.scrollMargin = barHeight;
      scrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          {" "}
          <IconButton onClick={RefreshPage} sx={{ borderRadius: 4 }}>
            <img
              src="src\assets\AK.png"
              alt="logo"
              style={{ width: 50, height: 50 }}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Kinnard
          </Typography>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ padding: 16 }}
          >
            <MenuIcon fontSize="large"></MenuIcon>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose("aboutme");
              }}
            >
              About Me
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose("skills");
              }}
            >
              Skills
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose("projects");
              }}
            >
              Projects
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose("contact");
              }}
            >
              Contact
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
