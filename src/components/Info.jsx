import React from 'react'

function InfoComponent({Icon, title}) {
  return (
    <div className='flex justify-start text-[
        #4B5665] items-center gap-1'>
    {Icon}
    {title}
    </div>
  )
}

export default InfoComponent