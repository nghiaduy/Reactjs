import React from 'react'
import { FaSpinner, FaTimes } from 'react-icons/fa'

const index = ({value, onChange, placeholder,isSpining, className}) => {
  return (
    <div className='search-box'>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={`Search`} className={`input-search ${className}`}/>

      <div className="display-none">
        {isSpining ? <FaSpinner className='spining'/> : <FaTimes onClick={() => onChange('')} className=' w-4'/>} 
      </div>
    </div>
  )
}

export default index