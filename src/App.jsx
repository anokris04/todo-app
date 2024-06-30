import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import Todolist from './components/Todolist';

function App() {
  const [isNavVisible, setNavVisible] = useState(false);

  return (
    <div className="h-full grid grid-cols-12">
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between bg-primary p-4 col-span-12">
        <FaBars onClick={() => setNavVisible(!isNavVisible)} className="cursor-pointer text-white" />
        <div className="text-white cursor-pointer" onClick={() => setNavVisible(false)}>TaskME</div>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-0 bg-primary z-50 transform ${isNavVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform md:static md:translate-x-0 md:col-span-1 col-span-12 md:block hidden`}>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="col-span-12 md:col-span-8 bg-middle p-4">
        <Todolist />
      </div>

      {/* Right Column */}
      <div className="col-span-12 md:col-span-3 bg-secondary p-4 hidden md:flex md:flex-col">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
