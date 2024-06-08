import React, { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../../sass/pages/login.scss";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();

  const [username, setUsername] = useState("john32");
  const [password, setPassword] = useState("87654321");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "john32" && password === "87654321") {
      toast.success("Welcome to admin");
      localStorage.setItem(
        "token",
        "ebdnsmsjkslkicscsckbslcscvskbc62dbjdbjdg8wbjnjbvf677cin"
      );
      navigate("/admin");
    } else {
      toast.error("Username or password incorrect");
    }
  };
  return (
    <main className="login" id="login">
      <div className="container">
        <div className="login__info">
          <form onSubmit={handleSubmit} className="login__wrapper">
            <b className="login__title">Login</b>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login__input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__input"
            />
            <button className="login__btn">Login</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default memo(Login);
