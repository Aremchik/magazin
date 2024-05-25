import { useEffect, useState } from "react";
import "./Authorization.css";
import { AppDispatch, RootState } from "../../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/AuthSlice";
import { useNavigate } from "react-router-dom";

export const Authorization: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  // Monitor the auth state for JWT token changes
  useEffect(() => {
    if (authState.token) {
      navigate("/Profile");
    }
  }, [authState.token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(loginUser({ email: username, password: password }));
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
            <a onClick={handleSubmit} className="button-auth">
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
