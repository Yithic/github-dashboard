const RepoCard = ({ repo }) => {
  return (
    <div>
      <h4>{repo.name}</h4>
      <p>{repo.description}</p>
      <p>⭐ {repo.stargazers_count}</p>
      <p>🍴 {repo.forks_count}</p>
      <p>{repo.language}</p>
    </div>
  );
};

export default RepoCard;