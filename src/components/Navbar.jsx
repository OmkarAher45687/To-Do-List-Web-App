import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-indigo-900 text-white py-2 z-50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <span className="font-bold text-xl">MyTask</span>
        </div>
        <ul className="flex gap-8">
          <li className="cursor-pointer hover:font-bold transition-all">
            Home
          </li>
          <li className="cursor-pointer hover:font-bold transition-all">
            Your Tasks
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
