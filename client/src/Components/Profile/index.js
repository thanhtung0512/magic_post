import React from "react";
import AuthService from "../../services/auth.service";
import stlye from "./Profile.module.css";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className={stlye.container}>
      <header className={stlye.title} >
        <h1>PROFILE</h1>
      </header>
      <p className={stlye.id}>
        <strong>Name:</strong> {currentUser.username}
      </p>
      <p className={stlye.id}>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p className={stlye.email}>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <div className={stlye.role}>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
