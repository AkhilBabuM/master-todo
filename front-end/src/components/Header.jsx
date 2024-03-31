import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center h-16 min-w-[50rem] border-b border-black">
      <div><Link to={"/"}className="text-xl font-extralight">MASTERTODO</Link></div>
      <div className="flex gap-5">
        <div>
          <Link to={"/login"} className="font-light">Login</Link>
        </div>
        <div>
          <Link to={"/signup"} className="font-light">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
