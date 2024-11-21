import { useEffect, useState } from "react";
import "./App.css";
import RepoCard from "./components/RepoCard";

function App() {
  const [user, setUser] = useState("");
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRepos = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    setRepoData(data);
    setLoading(false);
  };

  return (
    <>
      <h1>GitHub API</h1>
      <h2>Search for a GitHub user</h2>
      <input
        type="text"
        id="username_field"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button onClick={fetchRepos}>Search</button>
      {loading && <p>Loading...</p>}
      {!loading && repoData.length === 0 && <p>No repos found</p>}
      {!loading && repoData.length > 0 && <p>{repoData.length} repos found.</p>}
      <div className="repo-list">
        {repoData.map((repo) => (
          <RepoCard repo={repo} key={repo.id} />
        ))}
      </div>
    </>
  );
  // }
}

export default App;
