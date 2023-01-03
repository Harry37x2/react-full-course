import React from 'react'
import Box from './Box'
import Input from './Input'
import { useState } from 'react';

const Challenge1 = () => {    
  const [addColor, setAddColor] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <main>
        <Box
            addColor={addColor}
            hexValue={hexValue}
            isDarkText={isDarkText}
        />
        <Input
            addColor={addColor}
            setAddColor={setAddColor}
            setHexValue={setHexValue}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
         />
    </main>
  )
}

export default Challenge1