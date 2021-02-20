import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Avatar,
  ButtonBase,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Box,
} from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center" >
          <Avatar alt="Bohyeon" src="/bohyeon.jpeg" />
          <IconButton disabled>
            <Menu />
          </IconButton>
        </Box>
        <ButtonBase>
          <Link href="/">
            <Typography>보현's blog</Typography>
          </Link>
        </ButtonBase>
        <IconButton disabled>
          <Search />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
