const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <img src={user.avatar_url} width="100" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers}</p>
      <p>Repos: {user.public_repos}</p>
    </div>
  );
};

export default ProfileCard;