import React from 'react';

function Navbar() {
    return (
        <nav className="bg-nav p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <div className="text-white text-2xl font-semibold">Shuddhavayu</div>
          <ul className="flex justify-between text-xl font-bold space-x-4 w-56">
          <li>
              <a href="/adminlogin" className="text-white hover:text-gray-300 hover:text-orange">Sign Out</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 hover:text-orange">Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    );
}
export default Navbar

