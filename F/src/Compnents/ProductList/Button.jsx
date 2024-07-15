import React from 'react'

export const Btn = (props) => {
  return (
    <button className="Product_Add_Btn_1" onClick={props.EventHandler} >{props.children}</button>
  )
}
