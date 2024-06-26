import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Protected = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }
      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get(
          "http://localhost:2111/api/v1/user/me",
          config
        );
        setIsAuthenticated(true);
        console.log("This is response from /me", res);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated === null) {
    return <div>Authorizing</div>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Protected;
