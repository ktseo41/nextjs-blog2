import React from "react";
import TopAppBar from "./TopAppBar";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  makeStyles,
} from "@material-ui/core";
import { Menu, Description, AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => {
  return {
    bottomNavigation: {
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
    body: {
      margin: `0px ${theme.spacing(2)}px`,
    },
    footer: {
      paddingBottom: theme.spacing(7),
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <Container disableGutters={true}>
      <TopAppBar />
      <section className={classes.body}>{children}</section>
      <footer className={classes.footer}>footer</footer>
      {/* 기본적으로 하단 fixed가 아니라서 구글 뉴스를 보니 position fixed를 했음. 구글링도 유사하게 답 */}
      {/* 기본 elevation이 되있지 않아 찾아보니 :  You can wrap the BottomNavigation with a Paper component, it has an elevation property. */}
      {/* 출처 : https://github.com/mui-org/material-ui/issues/13953 */}
      <Box className={classes.bottomNavigation} boxShadow={3}>
        <BottomNavigation>
          <BottomNavigationAction
            showLabel={true}
            label="포스트"
            icon={<Description />}
          />
          <BottomNavigationAction showLabel={true} label="카테고리" icon={<Menu />} />
          <BottomNavigationAction showLabel={true} label="About Me" icon={<AccountCircle />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
}
