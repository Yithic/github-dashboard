import RepoCard from "./RepoCard";

const RepoList = ({ repos }) => {
  return (
  <div className="grid">
    {repos.map((repo) => (
      <RepoCard key={repo.id} repo={repo} />
    ))}
  </div>
);
};

export default RepoList;