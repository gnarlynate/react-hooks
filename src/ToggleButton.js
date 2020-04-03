import React, { useState } from 'react'

function ToggleButton(props){
  const [ show, setShow] = useState(true)

  const toggleShow = () => {
    setShow(!show)
  }
  
  return (
    <div>
      {
        show ? props.children : null
      }
      <button onClick={toggleShow}>
        {show ? 'Hide ' + props.children.type.name : 'Show ' + props.children.type.name} 
      </button>
    </div>
  )
}

export default ToggleButton