import React from 'react'

function Highlight({number, title}) {
  return (
    <p className="text-[15px]"><span  className=" text-[16px] text-[#1B88F4] bg-white mr-2">{number}</span>{title}</p>
  )
}

export default Highlight