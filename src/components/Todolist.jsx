import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Todolist = () => {
    const [todo, setTodo] = useState("");//todo string
    const [todos, setTodos] = useState([]);//array holding all todo
    const [showFinished, setShowFinished] = useState(true);
    
    useEffect(() => {
      let todoString = localStorage.getItem("todos");
      if(todoString){
        let todos = JSON.parse(localStorage.getItem("todos"));
        setTodos(todos);
      }
    },[])    

    const saveToLS = (params) => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }


    const handleDelete = (e, id) => {
      
      let newTodos = todos.filter(item => {
        return item.id!==id;
      });
      setTodos(newTodos);
      saveToLS();

    };

    const handleEdit = (e, id) => {
      
      let t = todos.filter(i=>i.id === id);
      setTodo(t[0].todo);
      let newTodos = todos.filter(item => {
        return item.id!==id;
      });
      setTodos(newTodos);
      saveToLS();
    };

    const handleAdd= ()=>{
        setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}]);
        setTodo("") ;
        saveToLS();
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
        saveToLS();
    };

    const toggleShowFinished = (e) => {
      setShowFinished(!showFinished);
    }

  return (
    <div className='mx-4 my-4 h-screen'>
      <div className='container mx-auto my-2 rounded-xl p-4 bg-white'>
        <h2 className='font-bold text-primary text-4xl'>Daily Tasks</h2>
      </div>

      <div className='container mx-auto my-2 rounded-xl p-4 bg-slate-300 min-h-[80vh]'>
        <h2 className='font-bold text-secondary text-3xl mb-3'>Add Task</h2>
        <input onChange={handleChange} value={todo} type='text' className='w-3/4 rounded-md h-8' placeholder=' Enter your task here'/>
        <button onClick={handleAdd} disabled={todo.length <= 3}className='buttoning mx-5 '>Add</button>
        <input onChange={toggleShowFinished} type="checkbox" checked={showFinished}/>Show Finished
        <h2 className='font-bold text-primary text-xl mt-4 mb-1'>Your To-Dos</h2>
        <div className='todos'>
        {todos.length === 0 && <div className='m-6 text-xl'>No Todos to DISPLAY</div>}
        {todos.map(item=>{
        return(showFinished || !item.isCompleted) && <div key={item.id} className='todo flex justify-between w-1/2 my-3'>
                    <div className='flex gap-7'>
                      <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                      <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                    </div>  
                    <div className="buttons flex h-full">
                        <button onClick={(e)=>{handleEdit(e, item.id)}} className='buttoning mx-1'>Edit</button>
                        <button onClick={(e)=>{handleDelete(e, item.id)}} className='buttoning mx-1'>Delete</button>
                    </div>
                </div>
                
        })}
        </div>
      </div>
    </div>
  )
}

export default Todolist
