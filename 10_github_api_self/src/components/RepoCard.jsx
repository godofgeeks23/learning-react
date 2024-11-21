import React from "react";

function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.html_url}>View on GitHub</a>
    </div>
  );
}

export default RepoCard;
