import React from "react";
import "./Profile.css";
import { UserData } from "../../../Modules/ProfileModules/UserData";

export const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <UserData />
    </div>
  );
};
