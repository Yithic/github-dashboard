const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
  <div className="card flex">
    <img
      src={user.avatar_url}
      width="80"
      style={{ borderRadius: "50%" }}
    />

    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
      <p>Repos: {user.public_repos}</p>
    </div>
  </div>
);
};

export default ProfileCard;