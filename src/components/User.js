import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  console.log("User");
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <h2>User Detail</h2>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br />
      <br />
      <Link to={`/user/${parseInt(id) - 1}`}>
        Prev User ({parseInt(id) - 1})
      </Link>
      <Link to={`/user/${parseInt(id) + 1}`}>
        Next User ({parseInt(id) + 1})
      </Link>
    </>
  );
}

export default User;
