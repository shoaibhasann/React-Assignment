import React, { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [name, setName] = useState('');
  const [error, setError] = useState("");

  const debouncedUsername = useDebounce(username, 500);

  useEffect(() => {
    if (debouncedUsername) {
      setLoading(true);

      fetch(`https://api.github.com/users/${debouncedUsername}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found");
          }
          return response.json();
        })
        .then((data) => {
          if (data.avatar_url) {
            setAvatarUrl(data.avatar_url);
          }
          if(data.name){
            setName(data.name);
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [debouncedUsername]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    setAvatarUrl("");
    setName("");
    setError("");
  };

  return (
    <div className="App">
      <h1>GitHub Avatar Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleInputChange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="avatar">
          {avatarUrl && <img src={avatarUrl} alt="User Avatar" />}
          {
            name && <div className="badge">{name}</div>
          }
          </div>
      )}
    </div>
  );
}

export default App;
