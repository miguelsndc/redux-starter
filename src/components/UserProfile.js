import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const { email, password } = useSelector((state) => state.auth.userData);

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <h3>{email}</h3>
      <h4>{password}</h4>
    </main>
  );
};

export default UserProfile;
