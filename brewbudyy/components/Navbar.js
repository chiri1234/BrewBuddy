"use client";
//nextjs is a server component and it is not possible to use the client side code in the server side code 
//so we need to use the client side code in the client side code only
import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'
import Link from "next/link";
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
export const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>
      <div className="logo font-bold text-lg">BrewBuddy</div>
    {/* <ul className = 'font-medium flex justify-between gap-4'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Sign Up</li>
      <li>Login</li>
    </ul> */}
    <div>
      <Link href = {"/login"}>
      <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          > Login

      </button></Link> 
    </div>
  </nav>

  )
}
export default Navbar;
 