import React from 'react'

function ImageCard({image, imageTitle}) {
  return (
    <div className="flex flex-col justify-center  h-full w-[300px] items-center">
        <img
          className="w-[141px] h-[103px] object-contain"
          // height="141px"
          // width="103px"
          src={image}
          alt="not found"
        />
        <p>{imageTitle}</p>
      </div>
  )
}

export default ImageCard