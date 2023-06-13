import React from "react";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <div className="login-form">
        <input type="e-mail" placeholder="e-mail" />
        <input type="password" placeholder="password" />
        <button>Giriş</button>
      </div>
    </div>
  );
}

export default Login;
