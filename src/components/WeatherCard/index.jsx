import React from 'react'

const WeatherItem = ({heading, body, handleOnclick, active, hover = false}) => {
  return (
    <div className={`group-item ${hover ? 'hover': ''} ${active ? 'active' : ''} `} onClick={() => handleOnclick ? handleOnclick() : null}>
        {heading && 
            <div className={`name date`}>{heading}</div>
        }
        {
            body && body()
        }
    </div>
  )
}

export default WeatherItem