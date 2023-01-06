import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUSerAction, addUserAsyncAction, deleteUserAction, deleteUserAsyncAction, getAllUsersAsyncAction, updateUserAction, updateUserAsyncAction } from "../store/slices/usersSlice";

const UserFuncComp = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
  const [isEdit, setIsEdit] = useState(false);
  const { fname, lname, email } = user;
  useEffect(()=>{
    dispatch(getAllUsersAsyncAction())
  },[])
  // Similar to Map State to Props
  const users = useSelector((state) => state.users);
  const handleChange=(e)=>{
    let newUser = {...user}
    newUser[e.target.name] = e.target.value;
    setUser(newUser)
  }
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // dispatch(addUSerAction(user));
    dispatch(addUserAsyncAction(user))
    clearForm()
  };
  const clearForm=()=>{
    setUser({ fname: "", lname: "", email: "" })
  }
  const handleUpdate = () => {
    // dispatch(updateUserAction(user));
    dispatch(updateUserAsyncAction(user))
    console.log(user)
    clearForm();
    setIsEdit(false);
  };
  const handleDelete = (user) => {
    // dispatch(deleteUserAction(user));
    dispatch(deleteUserAsyncAction(user))
  };
  const handleEdit = (user) => {
    setIsEdit(true);
    setUser(user)
  };
  console.log(users);
  return (
    <div>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          name="fname"
          value={fname}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="fname">Last Name : </label>
        <input
          type="text"
          name="lname"
          value={lname}
          onChange={(e) => {
        handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="fname">Email : </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            handleChange(e);
          }}
          disabled={isEdit}
        />{" "}
        <br />
        {isEdit ? (
          <button type="button" onClick={handleUpdate}>
            Update User
          </button>
        ) : (
          <button type="button" onClick={handleSubmit}>
            Add User
          </button>
        )}
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>First Name </th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.users.map((user, i) => (
            <tr key={i}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(user);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(user);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserFuncComp;
