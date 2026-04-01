const InsightsPanel = ({ repos }) => {
  if (!repos.length) return null;

  let totalStars = 0;
  const languageCount = {};

  repos.forEach((repo) => {
    totalStars += repo.stargazers_count;

    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  const topLang = Object.keys(languageCount).reduce((a, b) =>
    languageCount[a] > languageCount[b] ? a : b
  );

  return (
  <div className="card">
    <h3>Insights</h3>
    <p>Total Stars: {totalStars}</p>
    <p>Top Language: {topLang}</p>
    <p>Total Repos: {repos.length}</p>
  </div>
);
};

export default InsightsPanel;