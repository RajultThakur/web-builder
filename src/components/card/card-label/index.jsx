import React from 'react'

function CardLabel({Icon, label}) {
  return (
    <div className="flex items-center justify-center relative top-6 right-2 h-[34px] text-white rounded-tr-lg rounded-br-lg text-[16px] gap-2 bg-[#FF7724] w-max p-1">
        {Icon}
        {label}
      </div>
  )
}

export default CardLabel