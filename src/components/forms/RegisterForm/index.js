import React, { useState, useCallback } from "react";
import RegisterFormContext from "./context";

export default function RegisterForm({ children }) {
  const [inputs, setInputs] = useState([]); // eslint-disable-line

  const registerField = useCallback((name, ref) => {
    setInputs(oldValue => [...oldValue, { name, ref }]);
  }, []);

  // const verify = () =>
  //   console.log(
  //     inputs.map(({ ref }) => [
  //       ref.value,
  //       ref.attributes["aria-invalid"]["value"]
  //     ])
  //   );

  return (
    <form>
      <RegisterFormContext.Provider value={{ registerField }}>
        {children}
      </RegisterFormContext.Provider>
    </form>
  );
}
