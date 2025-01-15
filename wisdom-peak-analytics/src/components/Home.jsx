import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { users, setUsers, loading, setLoading, error, setError, theme,toggleTheme } =
    useContext(UserContext);
    
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [setUsers, setLoading, setError]);

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  return (
    <div className={`home ${theme ? "dark":"light"}`} >
            <div >
      <button onClick={toggleTheme} className='buttontoogle' >
        Switch to {theme ? "Light" : "Dark"} Mode
      </button>
      </div>
      <h1>User Management</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort {sortOrder === "asc" ? "Z-A" : "A-Z"}
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="user-list">
        {filteredUsers.map((user) => (
          <Link
            to={`/user/${user.id}`}
            key={user.id}
            className={`user-card ${theme ? "dark":"light"}`}
          >
            <div>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
