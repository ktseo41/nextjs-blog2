import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from 'next/router'
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    titleButton: {
      display: "flex",
      flexGrow: 1,
      height: theme.spacing(7),
    },
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: theme.spacing(1),
    },
    homeLink: {
      "&::focus": {
        textDecoration: "underline",
      },
    },
  })
);

type TopAppBarProps = {
  setSidebarOpened: Dispatch<SetStateAction<boolean>>;
};

export default function TopAppBar(props: TopAppBarProps) {
  const { setSidebarOpened } = props;
  const classes = useStyles();
  const router = useRouter();

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <IconButton onClick={() => setSidebarOpened(true)}>
            <Menu />
          </IconButton>
        </Box>
        <ButtonBase className={classes.titleButton}>
          <Box onClick={() => router.push("/")} display="flex" alignItems="center">
            <Avatar className={classes.avatar} alt="Bohyeon" src="/bohyeon.jpeg" />
            <Typography>보현's blog</Typography>
          </Box>
        </ButtonBase>
        <IconButton disabled>
          <Search />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
