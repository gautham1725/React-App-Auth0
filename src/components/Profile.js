import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return <div>{isAuthenticated && (
    <div>
        <h4>Profile details :-</h4>
        <img src={user.picture} alt={user.name} width='200px' height='200px'/>
        <p>Name: <b>{user.nickname}</b></p>
        <p>Email: <b>{user.email}</b></p>
    </div>
  )}</div>;
};

export default Profile;