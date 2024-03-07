import React from 'react'

function Label({classes, title}) {
  return (
    <span className={`${classes}`}>
            {title}
          </span>
  )
}

export default Label