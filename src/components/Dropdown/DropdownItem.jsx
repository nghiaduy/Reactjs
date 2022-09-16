import React from 'react'

const DropdownItem = ({value, handleClick}) => {
  return (
    <div className='cursor-pointer text-lg hover:text-white' onClick={() => handleClick(value)}>
        {value?.name}
    </div>
  )
}

export default DropdownItem