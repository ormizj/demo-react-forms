import { useState } from "react";
import Input from "./Input";
import { isEmail, isMinLength, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPass, setEnteredPass] = useState('');

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => {
    // ...
    return isEmail(value) && isNotEmpty
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', value => isMinLength(value, 6));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailHasError || passwordHasError) return;

    console.log(emailValue, passwordValue);
  }



  // const handleEmailChange = (e) => {
  //   setEnteredEmail(e.target.value);
  // }

  // const handlePassChange = (e) => {
  //   setEnteredPass(e.target.value)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && 'Pease enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordHasError && 'Pease enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
