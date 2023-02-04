import logo from "./logo.svg";
import "./App.css";
// import Main from './Components/Main';
// import MainFuncComp from './PureFunctionalComps/MainFuncComp';
import useFetchUsers from "./CustomHook/useFetchUsers";
import useCRUD from "./CustomHook/useCRUD";

function App() {
  const { users } = useFetchUsers(100);
  const { getUsers, deleteUser, updateUser, postUser } = useCRUD();
  console.log(users);
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <MainFuncComp/> */}
      <ul>
        {users.map((usr) => (
          <li>
            {usr.fname} {usr.lname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
