import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Todolist = () => {
    const [todo, setTodo] = useState("");//todo string
    const [todos, setTodos] = useState([]);//array holding all todo
    const handleEdit = () => {

    };
    const handleDelete = () => {

    };
    const handleAdd= ()=>{
        setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
        setTodo("") ;
    };
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex(item=>{
            return item.id === id;
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

  return (
    <div className='mx-4 my-4 h-screen'>
      <div className='container mx-auto my-2 rounded-xl p-4 bg-white'>
        <h2 className='font-bold text-primary text-4xl'>Daily Tasks</h2>
      </div>

      <div className='container mx-auto my-2 rounded-xl p-4 bg-slate-300 min-h-[80vh]'>
        <h2 className='font-bold text-secondary text-3xl mb-3'>Add Task</h2>
        <input onChange={handleChange} value={todo} type='text' className='w-3/4 rounded-md h-8' placeholder=' Enter your task here'/>
        <button onClick={handleAdd} className='buttoning mx-5 '>Add</button>
        <h2 className='font-bold text-primary text-xl mt-4 mb-1'>Your To-Dos</h2>
        <div className='todos'>
        {todos.map(item=>{
        return <div key={item.id} className='todo flex justify-between w-1/2 my-3'>
                    <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
                    <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                    <div className="buttons">
                        <button onClick={handleEdit} className='buttoning mx-1'>Edit</button>
                        <button onClick={handleDelete} className='buttoning mx-1'>Delete</button>
                    </div>
                </div>
        })}
        </div>
      </div>
    </div>
  )
}

export default Todolist
