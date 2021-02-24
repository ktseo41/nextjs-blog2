import { Box, makeStyles, Typography } from "@material-ui/core";
import {
  Instagram,
  Facebook,
  GitHub,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    },
    iconBox: {
      marginBottom: theme.spacing(1),
      height: theme.spacing(3),
      "& svg": {
        marginRight: theme.spacing(1),
        cursor: "pointer",
      },
    },
  };
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box className={classes.iconBox}>
        <Instagram
          onClick={() => window.open("https://www.instagram.com/ktseo41/")}
          style={{ height: 24, width: 24 }}
        />
        <Facebook
          onClick={() => window.open("https://www.facebook.com/bohyeon0711/")}
          style={{ height: 24, width: 24 }}
        />
        <GitHub
          onClick={() => window.open("https://github.com/ktseo41")}
          style={{ height: 24, width: 24 }}
        />
      </Box>
      <Typography variant="subtitle1">created by bohyeon</Typography>
    </footer>
  );
}
