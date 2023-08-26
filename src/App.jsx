import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();

      if (data) setUsers(data.data);
    };
    getUsers();
  }, []);

  return <UsersList users={users} />;
}

export default App;
