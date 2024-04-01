import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeToken } from "../store/slices/authSlice";
const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("UseEffect Ran in header");
    if (token) {
      setIsAuthenticated(token);
    }
  }, []);

  const logout = ()=>{
    dispatch(removeToken())
  }
  return (
    <div className="flex justify-between items-center h-16 min-w-[50rem] border-b border-black">
      <div>
        <Link to={"/"} className="text-xl font-extralight">
          MASTERTODO
        </Link>
      </div>

      {token ? (
        <div className="flex gap-5">
          <div>
            <Link to={"/login"}  onClick={logout} className="font-light">
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex gap-5">
          <div>
            <Link to={"/login"} className="font-light">
              Login
            </Link>
          </div>
          <div>
            <Link to={"/signup"} className="font-light">
              Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
