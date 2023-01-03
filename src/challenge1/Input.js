import React from 'react'
import colorNames from 'colornames'

const Input = ({addColor, setAddColor, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form 
        className='input' 
        onSubmit={(e)=>e.preventDefault}
    >
        <label htmlFor="addColor">Add Color</label>
        <input 
            type="text" 
            id="addcolor" 
            placeholder='Add Color'
            required
            value={addColor}
            onChange={(e)=> {
                setAddColor(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />
        <button
            type='button'
            onClick={()=>setIsDarkText(!isDarkText)}
        >
            Toggle text color
        </button>
    </form>
  )
}

export default Input