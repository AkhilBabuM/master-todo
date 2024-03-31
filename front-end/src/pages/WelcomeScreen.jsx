import Button from "../components/Button";

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-7xl font-thin">Welcome to Master To-Do</div>
      <div className="mt-10">
        <Button to={"/login"} className="text-2xl">LOGIN</Button>
        <Button to={"/signup"} className="text-2xl">SIGNUP</Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
