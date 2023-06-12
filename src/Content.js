import React from 'react'

const content = () => {
    function handleNameChange() {
        const names = ['Janaki','karthika', 'saranya'];
        const int = Math.floor(Math.random()*3)
        return(names[int])
    }

  return (
    <p>{handleNameChange()} Muruganantham</p>
  )
}

export default content