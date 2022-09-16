import React from 'react'
import DropdownItem from './DropdownItem'
 
const Dropdown = ({data = [], handleClick, }) => {
  return (
    <div className='shadow text-[#ccc] px-4 py-6 text-start'>
        {data.map((item, i) => (
            <DropdownItem  key={i} value={item} handleClick={handleClick} />
        ))}
    </div>
  )
}

export default Dropdown