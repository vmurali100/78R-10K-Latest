import React, { useEffect, useState } from "react";

const useFetchUsers = (totalUsers) => {
  const [users, setUsers] = useState([]);
  const url = `http://filltext.com/?rows=${totalUsers}&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true`;

  useEffect(() => {
    getUsersFromAPI()
  }, [totalUsers]);

  const getUsersFromAPI = async () => {
    const resposne = await (await fetch(url)).json();
    setUsers(resposne)
  };
  return {
    users
  }
};

export default useFetchUsers;
