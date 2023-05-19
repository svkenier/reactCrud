 
 import { useState } from "react"

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)
    let darkStyle ={
        background: darkMode ? '#1e1e1e' : '#fff',
        color: darkMode ? '#fff':'#1e1e1e'  ,
    }

    const handleDarkMode = () =>{
        setDarkMode(!darkMode)
    }

  return {
    darkMode,
    darkStyle,
    handleDarkMode
  }
}

export default useDarkMode