import React, { useRef, useContext, useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import RegisterFormContext from "../../forms/RegisterForm/context";
import validate from "validate.js";

const rules = {
  password: {
    presence: {
      message: "^A senha é obrigátoria."
    },
    length: {
      minimum: 8,
      message: "^Tamanho minimo de 8 dígitos."
    }
  }
};

export default function PasswordInput(props) {
  const { name, label } = props;
  const inputRef = useRef();
  const { registerField } = useContext(RegisterFormContext);

  useEffect(() => {
    if (inputRef.current) {
      registerField(name, inputRef.current);
    }
  }, [name, registerField]);

  const [isInputValid, setIsInputValid] = useState(false);
  const [doInputStarts, setDoInputStarts] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = event => validatePassword(event.target.value);
  const handleInputCapture = () => setDoInputStarts(true);

  function validatePassword(password) {
    const error = validate({ password }, rules);
    setIsInputValid(!error ? true : false);
    setErrorMsg(!error ? "" : error.password.join(","));
  }

  return (
    <TextField
      {...props}
      error={!isInputValid && doInputStarts}
      helperText={!isInputValid && doInputStarts && errorMsg}
      id={name}
      name={name}
      label={label}
      type="password"
      InputLabelProps={{
        shrink: true
      }}
      onChange={handleChange}
      onInputCapture={handleInputCapture}
      fullWidth
      required
    />
  );
}
