import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState();

  // bad practice
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPass = passRef.current.value;

    const emailIsValid = enteredEmail.includes('@');
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);

    console.log(enteredEmail, enteredPass)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            // type="email" // disabled email for validation testing
            name="email"
            ref={emailRef}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
