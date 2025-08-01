import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const RecruiterDashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="max-w-5xl m-auto pt-20">
      <h1>Dashboard</h1>
      <div>
        <h2>{user?.username}</h2>
        <p>{user?.role}</p>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
