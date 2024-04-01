import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { addToken, removeToken } from '../store/slices/authSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TodoPage = () => {
  const [res, setRes] = useState([])
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchData = async () => {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get(
        "http://localhost:2111/api/v1/todo",
        config
      );
      const data = response.data.data
      setRes(data); // assuming the data you want is in response.data
      console.log("The response is: ",typeof(data))
    };
  
    fetchData();
  },[])

  return (<div>
    {/* <div>TodoPage</div> */}
    
    {res.map((item, index) => (
      <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.completed ? 'Completed' : 'Not completed'}</p>
        <p>Created at: {item.createdAt}</p>
        <p>Updated at: {item.updatedAt}</p>
        <br/>
      </div>
    ))}
  </div>
  )
}

export default TodoPage