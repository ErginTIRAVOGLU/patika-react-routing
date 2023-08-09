import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [loading,setLoading] = useState(true);
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .finally(()=> setLoading(false));
    },[])

  return (
    <>
      <h2>Users</h2>
        {loading && <div>Loading...</div>}
      <div>
        <ul>
            {users.map((user)=>(
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Users;
