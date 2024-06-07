import React, { memo, useEffect } from "react";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="login" id="login">
      Login
    </main>
  );
};

export default memo(Login);
