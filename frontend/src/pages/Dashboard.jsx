import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    if (!user) navigate("/login");
    else console.log(user)
  }, [user, navigate]);

  return (
    <div>
      Dashboard
      {user ? (<p>Hello, {user.data.name}</p>): (<></>)}
      
    </div>
  );
};

export default Dashboard;
