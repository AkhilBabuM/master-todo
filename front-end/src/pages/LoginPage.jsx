import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const { email, password } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    // console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:2111/api/v1/user/login",
        formData
      );
      // console.log("This is the Token: ", response.data.token);
      setMessage(response.data.message.toString() + ", Redirecting...");
      localStorage.setItem("user", response.data.token.toString());
      setTimeout(() => navigate("/todo"), 1000);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message.toString() + ", Try Again");
      } else if (error.request) {
        setMessage("No response from server. Please try again later.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-5xl font-thin">LOGIN</h2>
      <form
        onSubmit={onSubmit}
        className="w-[30rem] flex flex-col items-center pt-5"
      >
        <InputBox
          type="text"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={onChange}
          className=""
        />
        <InputBox
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={onChange}
          className=""
        />
        <Button type="submit" className="w-full text-center">
          SUBMIT
        </Button>
      </form>
      <div className="pt-5 font-semibold text-wrap w-[30rem]">{message}</div>
    </div>
  );
};

export default LoginPage;
