import React from "react";

export const UserList = ({ user, handleRemove }) => {
  const { id, image, name, age } = user;
  return (
    <div className="user-list">
      <div className="user-img">
        <img className="user-list-img" src={image} alt={name} />
      </div>
      <div className="user-info">
        <div className="user-name">
          <h3 className="name">{name}</h3>
        </div>
        <div className="user-age">
          <p className="user-age">
            Age:{" "}
            <span style={{ color: "orange", fontWeight: "bold" }}>{age}</span>{" "}
            years old
          </p>
        </div>
      </div>
      <div className="user-delete">
        <button className="person-delete-btn" onClick={() => handleRemove(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
