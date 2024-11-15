import React from 'react'
import { useEffect,useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
function Maindiv() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(getTodos)
  const [searchTerm, setSearchTerm] = useState("")
  const [showFinished,setShowFinished]=useState(false)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  function getTodos(){
    let todostring=localStorage.getItem("todos")
    if(todostring) {
        let todos = JSON.parse(todostring)
        return todos;
    }
    else{
      return [];
    }
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  function handleAdd(){
    let newTodos=[...todos,{id:uuidv4(),todo,completed:false}]
    setTodos(newTodos)
    setTodo("")
  }
  const handleEdit=(e,id)=>{
    let t=todos.filter((todo)=>todo.id===id)
    setTodo(t[0].todo)
    handleDelete(e,id)
  }
  const handleDelete=(e,id)=>{
    let newTodos = todos.filter((i) => i.id !== id);
    setTodos(newTodos)
  }
  const handleCheckbox=(e) => {
    let id=e.target.id
    let index = todos.findIndex((todo) => todo.id === id)
    let newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  const handleFinished=() => {
    setShowFinished(!showFinished)
  }
  
  return (
    <main className='main h-screen flex flex-col items-center bg-starry bg-no-repeat bg-cover w-full'>
      <div className='intro flex flex-col text-center m-5 text-white'>
          <h1 className='text-3xl font-bold'>Welcome to iTask!</h1>
          <p className='text-xl max-iphone:text-sm'>A simple task management application.</p>
      </div>
      <div className="todos-window bg-starry2 bg-no-repeat bg-cover p-10 rounded-xl text-white w-1/2 max-iphone:w-[90%] max-iphone:p-3">
        <div className="addtodo flex justify-center gap-3 max-iphone:items-center max-iphone:gap-2">
            <h1 className='btn text-2xl font-bold text-center max-iphone:text-sm max-iphone:text-nowrap'>Add your todo:</h1>
            <input onChange={handleChange} value={todo} type="text" className="border-2 border-black border-solid rounded-lg p-1 text-black text-xl font-bold max-iphone:w-[90%] max-iphone:text-xs max-iphone:h-10" placeholder="Enter your todo here"></input>
            <button onClick={handleAdd} className='bg-green-400 text-white px-2 rounded-lg cursor-pointer text-xl font-bold' disabled={todo.length<3}><IoMdAdd/></button>
        </div>
        <div className="todolist flex flex-col justify-center max-iphone:text-sm">
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-bold max-iphone:text-lg'>Your todos</h1>
              <div className='flex gap-2'>
                <input type="checkbox" onChange={handleFinished} checked={showFinished} className='max-iphone:w-3 max-iphone:h-5'/>
                <p className='text-lg max-iphone:text-sm'>Show Finished Todos</p>
              </div>
            </div>
          <div className="todos max-iphone:mt-2">
                {todos.length===0 && <div className='m-5 flex justify-center'><p>No Todos to display</p></div> }
                {todos.map((i)=>{
                  return(showFinished || !i.completed) &&
                    <div className="todo flex justify-between mb-3 text-xl max-iphone:text-sm" key={i.id}>
                        <div className='flex gap-5'>
                          <input type="checkbox" checked={i.completed} id={i.id} onChange={handleCheckbox}/>
                          <p className={i.completed?"line-through":""}>{i.todo}</p>
                        </div>
                        <div className="buttons flex gap-4 h-1/2">
                            <button className='bg-green-400 px-2 py-1 rounded-lg cursor-pointer' onClick={(e)=>handleEdit(e,i.id)}><FaEdit/></button>
                            <button className='bg-red-400 px-2 py-1 rounded-lg cursor-pointer' onClick={(e)=>handleDelete(e,i.id)}><MdDelete/></button>
                        </div>
                    </div>     
                })}
            </div>
        </div>
      </div>
    </main> 
  )
}
export default Maindiv