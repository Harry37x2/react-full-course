import React from 'react'

const Box = ({addColor, hexValue, isDarkText}) => {
  return (
    <div 
        className='box' 
        style={{
            backgroundColor:addColor,
            color: isDarkText ? "#000" : "#FFF"
        }}
    >
        <p>{addColor ? addColor : "Empty"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

Box.defaultProps = {
    addColor: "Empty Color Value"
}

export default Box