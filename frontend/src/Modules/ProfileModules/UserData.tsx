import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import "./UserData.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/Store";

interface UserData {
  userid: number;
  username: string;
  email: string;
  address: string;
  password: string;
  phone: string;
}

export const UserData: React.FC = () => {
  const userid = useSelector((state: RootState) => state.auth.userid);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updatedUser, setUserData] = useState<UserData>({
    userid: 0,
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get(`https://localhost:7289/api/catalog/user/${userid}`)
      .then((response) => {
        const userDataFromApi: UserData = response.data;
        setUserData(userDataFromApi);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof UserData
  ) => {
    setUserData({ ...updatedUser, [field]: e.target.value });
  };

  const saveUserData = () => {
    try {
      console.log(updatedUser);
      const response = axios.post(
        `https://localhost:7289/api/catalog/update/user/${userid}`,
        updatedUser
      );
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/authorization");
  };

  return (
    <div className="userData-container">
      <h1>Мои данные</h1>
      <div className="data-text">ФИО</div>
      <input
        type="text"
        placeholder="Name"
        value={updatedUser.username ? updatedUser.username : ""}
        onChange={(e) => handleInputChange(e, "username")}
      />

      <div className="data-text">Адрес</div>
      <input
        type="text"
        placeholder="Address"
        value={updatedUser.address ? updatedUser.address : ""}
        onChange={(e) => handleInputChange(e, "address")}
      />
      <div className="data-text">Телефон</div>
      <input
        type="text"
        placeholder="Phone Number"
        value={updatedUser.phone ? updatedUser.phone : ""}
        onChange={(e) => handleInputChange(e, "phone")}
      />
      <div className="data-text">Email</div>
      <input
        type="email"
        placeholder="Email"
        value={updatedUser.email ? updatedUser.email : ""}
        onChange={(e) => handleInputChange(e, "email")}
      />
      <button onClick={saveUserData}>Сохранить</button>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};
