const TodoPage = () => {
  const onClick = ()=>{
    localStorage.setItem('user', '');
  }
  return (<div>
    <div>TodoPage</div>
    <button onClick={onClick}>Delete Token</button>
  </div>
  )
}

export default TodoPage