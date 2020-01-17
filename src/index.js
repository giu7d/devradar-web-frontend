import React from "react";
import ReactDOM from "react-dom";
import "./global.scss";
import "./index.scss";
import "./main.scss";
import {
  // TextField,
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  Typography,
  // Chip,
  IconButton,
  // InputAdornment,
  // Button,
  // InputLabel,
  Avatar
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
// import { generateGradient } from "./utils";
import RegisterForm from "./components/forms/RegisterForm";
import GitHubUserInput from "./components/inputs/GitHubUserInput";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7d40c7",
      light: "#9867d3",
      dark: "#6430a4",
      contrastText: "#ffffff"
    },
    text: {
      primary: "#333",
      secondary: "#666",
      hint: "#acacac"
    }
  }
});

const useStyles = makeStyles({
  title: {
    display: "block",
    margin: "24px 0px",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold"
  },
  locationTitle: {
    marginTop: "14px"
  },
  chip: {
    margin: 8,
    color: "#FFF"
  },
  submitBtn: {
    marginTop: 48,
    padding: "14px 10px"
  },
  devName: {
    display: "block",
    fontSize: 18,
    fontWeight: "bold"
  },
  devBio: {
    fontSize: 14,
    margin: "14px 0"
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <aside>
        <Typography className={classes.title} color="textPrimary">
          Crie sua conta
        </Typography>
        <RegisterForm>
          <GitHubUserInput name="github_user" />
        </RegisterForm>
        {/* <form>
          <TextField
            id="github_username"
            label="Usuário GitHub"
            className="formInput"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            required
          />
          <TextField
            id="password"
            label="Senha"
            type="password"
            helperText="Tamanho mínimo 8 digitos."
            className="formInput"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            required
          />

          <TextField
            id="confirm_password"
            label="Confirme sua senha"
            helperText="Como informado anteriormente."
            type="password"
            className="formInput"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            required
          />
          <div className="formInput">
            <TextField
              id="techs"
              label="Tecnologias"
              placeholder="Javascript, ReactJS, ..."
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              className="formInput"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="submit"
                      aria-label="confirm"
                      size="small"
                      disabled
                    >
                      <Done />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <div className="chipContainer">
              {["Javascript", "C++", "Java", "C#", "Rust"].map((el, i) => (
                <Chip
                  key={i}
                  label={el}
                  className={classes.chip}
                  style={{ background: generateGradient(false) }}
                  size="small"
                  onDelete={() => {}}
                />
              ))}
            </div>
          </div>

          <div className="formInput">
            <InputLabel shrink>Localização</InputLabel>
            <Typography
              className={classes.locationTitle}
              color="textPrimary"
              gutterBottom
            >
              Saltinho-SP
            </Typography>
            <Typography variant="caption" color="textSecondary" gutterBottom>
              Lat.: 00,000 Lon.: 00,000
            </Typography>
          </div>

          <Button
            type="submit"
            className={classes.submitBtn}
            variant="contained"
            color="primary"
            size="large"
            disableElevation
            fullWidth
            disabled
          >
            Registrar
          </Button>
        </form> */}
      </aside>
      <main>
        <ul>
          {["", "", "", "", ""].map((item, index) => (
            <li key={index} className="devItem">
              <header>
                <Avatar
                  src="https://avatars3.githubusercontent.com/u/30274817?s=400&u=116880ce2364449ed29e334cea8e1c6d0f38ce96&v=4"
                  alt="Giuseppe Setem"
                />
                <div className="devInfo">
                  <Typography className={classes.devName} color="textPrimary">
                    Giuseppe Setem
                  </Typography>
                  <Typography
                    className={classes.devTechs}
                    variant="caption"
                    color="textPrimary"
                    gutterBottom
                  >
                    ReactJS, React Native, VueJs
                  </Typography>
                </div>
              </header>
              <Typography
                className={classes.devBio}
                variant="body1"
                paragraph
                color="textSecondary"
              >
                Bio...
              </Typography>
              <div className="devAction">
                <IconButton
                  href="https://github.com/giu7d"
                  color="primary"
                  size="small"
                >
                  <GitHub />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
