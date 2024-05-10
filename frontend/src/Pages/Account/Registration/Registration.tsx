import React, { useState } from "react";
import "./Registration.css";

export const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Пароль ен совпадет");
    } else {
      alert(`Email: ${email}, Password: ${password}`);
      // You can add your registration logic here
    }
  };

  return (
    <div className="registration-block">
      <div className="registration-form">
        <h2>Registration</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Логин:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Подтвердите пароль:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <a href="/Authorization" className="button-auth">
            Зарегистрироваться
          </a>
        </form>
      </div>
    </div>
  );
};
