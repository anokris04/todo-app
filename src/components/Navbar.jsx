import React from 'react';

const Navbar = () => {
  return (
    <nav className="m-0 p-0 h-screen flex"> {/* Added a background color for better visibility */}
      <div className="flex flex-col mx-2 my-4 items-center justify-between h-full">
        <div className="text-white">
          <div className="text-2xl font-bold">Task<span className="font-normal">ME</span></div>
          <div className="text-md">Your very own<br />Task Planner</div>
          <ul className="flex flex-col mt-10 gap-8 text-xl text-white font-semibold">
            <li className="hovering">Home</li>
            <li className="hovering">About</li>
            <li className="hovering">Calendar</li>
            <li className="hovering">Settings</li>
          </ul>
        </div>
        <div className="text-white text-lg mb-4">&copy; Copyright 2024</div>
      </div>
    </nav>
  );
};

export default Navbar;
