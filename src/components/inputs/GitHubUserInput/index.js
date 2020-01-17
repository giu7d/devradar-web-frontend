import React, { useState, useEffect, useRef, useContext } from "react";
import { TextField, InputAdornment, Icon } from "@material-ui/core";
import { Done } from "@material-ui/icons";
import RegisterFormContext from "../../forms/RegisterForm/context";
import Axios from "axios";
import validate from "validate.js";

const rules = {
  username: {
    presence: {
      message: "^O nome de usuário é obrigátorio."
    },
    length: {
      minimum: 1,
      message: "^O nome de usuário é obrigátorio."
    }
  }
};

const isGitHubValid = username => {
  const githubUrl = `https://api.github.com/users/${username}`;
  return new Promise(resolve => {
    Axios.get(githubUrl)
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
};

export default function GitHubUserInput(props) {
  const { name, label } = props;

  const inputRef = useRef();
  const { registerField } = useContext(RegisterFormContext);

  useEffect(() => {
    if (inputRef.current) {
      registerField(name, inputRef.current);
    }
  }, [name, registerField]);

  const [isInputValid, setIsInputValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [doUserExists, setDoUserExists] = useState(false);
  const [doInputStarts, setDoInputStarts] = useState(false);

  const handleChange = event => validateUsername(event.target.value);
  const handleInputCapture = () => setDoInputStarts(true);
  const handleBlur = async event => {
    const githubValidity = await isGitHubValid(event.target.value);
    setDoUserExists(githubValidity);
    setErrorMsg(githubValidity ? "" : "O nome de usuário não existe.");
  };

  const validateUsername = username => {
    const error = validate({ username }, rules);
    setIsInputValid(!error ? true : false);
    setErrorMsg(!error ? "" : error.username.join(","));
  };

  const hasError = !isInputValid && doInputStarts;
  const isValid = isInputValid && doInputStarts && doUserExists;

  return (
    <TextField
      {...props}
      error={hasError}
      helperText={hasError && errorMsg}
      id={name}
      name={name}
      inputRef={inputRef}
      label={label}
      InputLabelProps={{
        shrink: true
      }}
      InputProps={
        isValid
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <Icon color="primary">
                    <Done />
                  </Icon>
                </InputAdornment>
              )
            }
          : null
      }
      onChange={handleChange}
      onBlur={handleBlur}
      onInputCapture={handleInputCapture}
      fullWidth
      required
    />
  );
}
