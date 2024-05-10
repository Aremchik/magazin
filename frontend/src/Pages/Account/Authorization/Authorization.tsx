import { useState } from "react";
import "./Authorization.css";

export const Authorization: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="authorization-block">
      <div className="loginForm">
        <h2>Вход</h2>
        <form>
          <div className="inputGroup">
            <label htmlFor="username">Логин:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-auth-container">
            <a href="/Profile" className="button-auth">
              Войти
            </a>
            <a href="/Registration" className="button-auth">
              Зарегистрироваться
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
