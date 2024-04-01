import { Link } from "react-router-dom";

const Button = ({ children, to, type, className, onClick }) => {
  const classes =
    "border font-thin text-white hover:bg-white bg-black hover:text-black border-black   p-2 m-2 rounded";
  if (type === "submit") {
    return (
      <button type={type} onClick={onClick} className={`${classes} ${className}`}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} onClick={onClick} className={`${classes} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
