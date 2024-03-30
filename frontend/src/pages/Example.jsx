import axios from "axios";
import { useEffect, useState } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmZjNGMxNWYzZDQzYjhlYzUyNGRmOCIsImVtYWlsIjoidGVzdDNAZ21haWwuY29tIiwiaWF0IjoxNzExMjYwODY1LCJleHAiOjE3MTM4NTI4NjV9.lRUnF7-dkQwgoC5VtaXe8hfJedP3U4ef8KOv1NT4dDc";

const setAPIHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const Example = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(
      "http://localhost:2111/api/v1/todo",
      setAPIHeader(token)
    ).then((res) => setList(res))
    
  }, []);
  console.log(list)
  return (
    <div>
      Example
      {/* <div>{list}</div> */}
    </div>
  );
};

export default Example;
