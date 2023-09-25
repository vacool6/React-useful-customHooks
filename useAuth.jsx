import React, { useState } from "react";

function useAuth() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
}

function App() {
  const { user, login, logout } = useAuth();

  return (
    <div className="App">
      <h1>Authentication Example</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ name: "Raja" })}>Login</button>
      )}
    </div>
  );
}

export default App;
