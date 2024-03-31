import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatpass: "",
  });

  const [message, setMessage] = useState("");

  const { name, email, password, repeatpass } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatpass) {
      console.log("Passwords no not match");
      setMessage("Passwords do not match, Try again");
    } else {
      setMessage("");
      console.log(formData);
      try {
        const response = await axios.post(
          "http://localhost:2111/api/v1/user/signup", formData
        );
        console.log("This is the Token: ",response.data.token);
        setMessage(response.data.message.toString()+", Redirecting...")
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      } catch (error) {
        console.log(error);
        console.log(error.response.data.message.toString())
        setMessage(error.response.data.message.toString() + ", Try Again")
      }
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-5xl font-thin">SIGNUP</h2>
      <form
        onSubmit={onSubmit}
        className="w-[30rem] flex flex-col items-center pt-5"
      >
        <InputBox
          type="text"
          name="name"
          value={name}
          placeholder="Enter Name"
          onChange={onChange}
          className=""
        />
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
        <InputBox
          type="password"
          name="repeatpass"
          value={repeatpass}
          placeholder="Re-enter Password"
          onChange={onChange}
          className=""
        />
        <Button type="submit" className="w-full text-center">
          SUBMIT
        </Button>
      </form>
      <div className="pt-5 font-semibold">{message}</div>
    </div>
  );
};

export default SignupPage;
