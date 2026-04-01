import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import HistoryList from "./components/HistoryList";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import InsightsPanel from "./components/InsightsPanel";
import { fetchUser, fetchRepos } from "./services/githubApi";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(stored);
  }, []);

  const saveHistory = (username) => {
    let newHistory = history.filter((h) => h !== username);
    newHistory.unshift(username);
    newHistory = newHistory.slice(0, 5);

    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  const handleSearch = async (username) => {
    try {
      const userData = await fetchUser(username);
      const repoData = await fetchRepos(username);

      setUser(userData);
      setRepos(repoData);
      saveHistory(username);
    } catch {
      alert("User not found");
    }
  };

  const deleteHistory = (username) => {
    const updated = history.filter((h) => h !== username);
    setHistory(updated);
    localStorage.setItem("history", JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("history");
  };

  return (
  <div className="container">
    <h1 className="title">GitHub Dashboard </h1>

    <SearchBar onSearch={handleSearch} />

    <HistoryList
      history={history}
      onSelect={handleSearch}
      onDelete={deleteHistory}
      onClear={clearHistory}
    />

    <ProfileCard user={user} />
    <InsightsPanel repos={repos} />
    <RepoList repos={repos} />
  </div>
  );
}

export default App;