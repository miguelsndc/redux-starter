import { useState } from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store/auth";

import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    dispatch(authActions.login({ email, password }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login();
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
