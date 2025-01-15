import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleTheme = () => {
    setTheme(!theme); 
  };

  return (
    <UserContext.Provider value={{ users, setUsers, theme, toggleTheme, setTheme, loading, setLoading, error, setError }}>
      {children}
    </UserContext.Provider>
  );
};
