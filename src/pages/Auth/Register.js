import React from "react";

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <div className="register-form">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="surname" />
        <input type="e-mail" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Kayıt</button>
      </div>
    </div>
  );
}

export default Register;
