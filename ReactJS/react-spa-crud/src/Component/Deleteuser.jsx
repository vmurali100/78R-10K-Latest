import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import User from "./User";

const Deleteuser = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch("http://localhost:3201/users/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  const confirmDelete = () => {
    fetch("http://localhost:3201/users/" + params.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <ul>
        <li>{user.fname}</li>
        <li>{user.lname}</li>
        <li>{user.email}</li>
        <li>{user.password}</li>
      </ul>
      <button className="btn btn-danger" onClick={confirmDelete}>
        Confirm Delete
      </button>
    </div>
  );
};

export default Deleteuser;
