import React, { useState, useEffect, ChangeEvent } from "react";
import "./UserData.css";

interface UserData {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}

export const UserData: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    // Simulating fetching initial user data from the API
    const initialData: UserData = {
      name: "Artem",
      address: "ewfwefwe",
      phoneNumber: "ewfwef",
      email: "efwe",
    };
    setUserData(initialData);
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof UserData
  ) => {
    setUserData({ ...userData, [field]: e.target.value });
  };

  const saveUserData = () => {
    console.log("User data saved:", userData);
  };

  return (
    <div className="userData-container">
      <h1>Мои данные</h1>
      <div className="data-text">ФИО</div>
      <input
        type="text"
        placeholder="Name"
        value={userData.name}
        onChange={(e) => handleInputChange(e, "name")}
      />

      <div className="data-text">Адрес</div>
      <input
        type="text"
        placeholder="Address"
        value={userData.address}
        onChange={(e) => handleInputChange(e, "address")}
      />
      <div className="data-text">Телефон</div>
      <input
        type="text"
        placeholder="Phone Number"
        value={userData.phoneNumber}
        onChange={(e) => handleInputChange(e, "phoneNumber")}
      />
      <div className="data-text">Email</div>
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => handleInputChange(e, "email")}
      />
      <button onClick={saveUserData}>Сохранить</button>
    </div>
  );
};
