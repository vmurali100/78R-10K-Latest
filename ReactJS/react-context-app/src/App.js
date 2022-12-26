import React, { useState } from "react";

import "./App.css";
import Main from "./Components/Main";
import { MyContextProvider } from "./Components/MyContext";

function App() {
  const [users, setUsers] = useState(["Murali", "Ram", "Arun", "Naveen"]);

  return (
    <div className="App">
      <MyContextProvider value={users}>
        {/* <Main allUsers={users} /> */}
        <Main/>
      </MyContextProvider>
    </div>
  );
}

export default App;
