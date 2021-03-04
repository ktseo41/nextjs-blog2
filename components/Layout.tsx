import React, { useState } from "react";
import TopAppBar from "./TopAppBar";
import {
  // BottomNavigation,
  // BottomNavigationAction,
  // Box,
  Container,
  makeStyles,
} from "@material-ui/core";
// import { Menu, Description, AccountCircle } from "@material-ui/icons";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => {
  return {
    bottomNavigation: {
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
    body: {
      marginTop: `${theme.spacing(7)}px`,
    },

  };
});

export default function Layout({ children }) {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(true);
  const classes = useStyles();
  return (
    <Container maxWidth={false} disableGutters={true}>
      <TopAppBar setSidebarOpened={setSidebarOpened} />
      <Sidebar open={sidebarOpened} setOpen={setSidebarOpened} />
      <section className={classes.body}>{children}</section>
      <Footer />
      {/* <footer className={classes.footer}>created by bohyeon</footer> */}
      {/* 기본적으로 하단 fixed가 아니라서 구글 뉴스를 보니 position fixed를 했음. 구글링도 유사하게 답 */}
      {/* 기본 elevation이 되있지 않아 찾아보니 :  You can wrap the BottomNavigation with a Paper component, it has an elevation property. */}
      {/* 출처 : https://github.com/mui-org/material-ui/issues/13953 */}
      {/* <Box className={classes.bottomNavigation} boxShadow={3}>
        <BottomNavigation>
          <BottomNavigationAction showLabel={true} label="포스트" icon={<Description />} />
          <BottomNavigationAction showLabel={true} label="카테고리" icon={<Menu />} />
          <BottomNavigationAction showLabel={true} label="About Me" icon={<AccountCircle />} />
        </BottomNavigation>
      </Box> */}
    </Container>
  );
}
