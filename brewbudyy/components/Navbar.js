import React from "react";

export const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>
      <div className="logo font-bold text-lg">BrewBuddy</div>
    <ul className = 'flex justify-between gap-4'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Sign Up</li>
      <li>Login</li>
    </ul>
  </nav>

  )
}
export default Navbar;
 