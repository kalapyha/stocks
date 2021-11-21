import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  Grid,
  Menu,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "../../images/logo.png";

const useStyles = makeStyles({
  divider: {
    paddingRight: "1rem",
    opacity: "0.5",
  },
  navs: {
    textAlign: "end",
  },
  link: {
    color: "#fefefe",
    textDecoration: "none",
    fontWeight: "400",
    fontSize: "1.1rem",
  },
  active: {
    fontWeight: "600",
    color: "#fff",
  },
});

type MenuLink = {
  to: string;
  link: string;
};

const navLinks: MenuLink[] = [
  {
    to: "/",
    link: "Home",
  },
  {
    to: "/news",
    link: "News",
  },
  {
    to: "/exchanges",
    link: "Exchanges",
  },
  {
    to: "/metals",
    link: "Metals",
  },
];

export default function Header() {
  const classes = useStyles();
  let location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid
              container
              xs={12}
              md={4}
              alignItems="center"
              justifyContent="center"
            >
              <Avatar src={logo} />
              <Typography
                component="div"
                variant="h6"
                sx={{ flexGrow: 1 }}
                display={{ xs: "none", lg: "block" }}
              >
                Crypto & Metals
              </Typography>
            </Grid>
            <Box
              component={Grid}
              item
              display={{ xs: "block", lg: "block" }}
              className={classes.divider}
            >
              |
              {/* TODO add live prices here <------ ex Gold: +1.5 USD per ounce  */}
            </Box>
            <Grid
              xs={12}
              md={7}
              container
              alignItems="center"
              justifyContent="space-around"
              className={classes.navs}
            >
              {navLinks.map(({ to, link }) => {
                console.log(link, location.pathname);
                return (
                  <div key={link}>
                    <NavLink
                      to={to}
                      className={`${classes.link} ${
                        to === location.pathname ? classes.active : null
                      }`}
                    >
                      {link}
                    </NavLink>
                  </div>
                );
              })}
            </Grid>
            {/* <Box component={Grid} item>
              <IconButton>
                <Menu color="secondary" />
              </IconButton>
            </Box> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
