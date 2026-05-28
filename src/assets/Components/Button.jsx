import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button
        className='py-2 px-3 border hover:bg-black/90 bg-black'
        style={{
            
            color: props.textcolor,
            hover: props.hover
        }}
        onClick={props.action}
        >{props.buttontext}</button>
    </div>
  )
}

export default Button