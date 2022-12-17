import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button 
      className={classes.button} 
      type={props.type || 'button'} 
      onClick={props.onClick}            //that function is executed at caller site of which pointer is sent here via prop.
    >
      {props.children}
    </button>
  )
}

export default Button
