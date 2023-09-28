import React from "react";
import "./Profile.css"

const Profile = () => {
  return (
    <div className="container">
      <div className="form-container">
        <form>
            <label htmlFor="name" className="labels">Name</label><input type="text" name="Name" className="input-field name"/> 
            <label htmlFor="email" className="labels">Email</label><input type="text" name="Email" className="input-field name"/>
            <label htmlFor="age" className="labels">Age</label><input type="text" name="Age" className="input-field name"/>
            <label htmlFor="profession" className="labels">Age</label><input type="text" name="Profession" className="input-field name"/>
        </form>
      </div>
    </div>
  );
};

export default Profile;
