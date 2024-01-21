import { useState } from "react";
import Input from "./Input";
import { isEmail, isMinLength, isNotEmpty } from "../util/validation";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPass, setEnteredPass] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && isNotEmpty(enteredValues.email);
  const passwordIsInvalid = didEdit.password && !isMinLength(enteredValues.password, 6);

  const handleInputChange = (key, value) => {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [key]: value,
    }));

    // name "didEdit" not entirely accurate
    setDidEdit(prevDidEdit => ({
      ...prevDidEdit,
      [key]: false,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if not valid, return here...

    console.log(enteredValues);
  }

  const handleInputBlur = (key) => {
    setDidEdit(prevDidEdit => ({
      ...prevDidEdit,
      [key]: true,
    }))
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
          value={enteredValues.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={() => handleInputBlur('email')}
          error={emailIsInvalid && 'Pease enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredValues.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          onBlur={() => handleInputBlur('password')}
          error={passwordIsInvalid && 'Pease enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
