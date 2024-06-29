import { useState } from 'react'
import Navbar from './components/Navbar'
import Calendar from './components/Calendar';
import Todolist from './components/Todolist';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-6 h-full'>
      <div className='col-span-1 bg-primary'>
        <Navbar/>
      </div>
      <div className='col-span-5 bg-middle'>
        <Todolist/>
      </div>
    </div>
  );
}

export default App
