import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "rgba(28, 71, 222, 0.87)",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#E5E5E5",
      paper: "#ffffff",
    },
  },
});

export default theme;
