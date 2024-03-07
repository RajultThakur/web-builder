import React from 'react'

function SignUp() {
  return (
    <div className= "p-1 flex md:flex-row items-center justify-between my-3 flex-col">
          <p className="text-[32px]/[40px] text-[#5C6874] max-w-[398px]">Sign up and get exclusive special deals</p>
          <div className="h-[52px] max-w-[348px] flex items-center">
          <input type="text" className="outline-none h-full w-full border-gray-[1px] border p-2 " />
          <button className="w-[97px] rounded-tr-lg rounded-br-lg h-full bg-[#1B88F4] text-white ">Sign Up</button>
          </div>
        </div>
  )
}

export default SignUp