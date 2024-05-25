import React, { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const userData = {
        email: email,
        password: password,
      };

      axios
        .post("https://localhost:7289/api/Catalog/register", userData)
        .then((response) => {
          console.log(response.data);
          navigate("/Authorization");
        })
        .catch((error) => {
          console.error("Registration error:", error.message);
          alert("Registration failed. Please try again.");
        });
    }
  };

  return (
    <div className="registration-block">
      <div className="registration-form">
        <h2>Регистрация</h2>
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
          <a onClick={handleSubmit} className="button-auth">
            Зарегистрироваться
          </a>
        </form>
      </div>
    </div>
  );
};
