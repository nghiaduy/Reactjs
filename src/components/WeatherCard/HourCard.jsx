import React from 'react'

const Daily = ({icon, temp, time, active}) => {
  return (
    <div className={`flex flex-col items-center`}>
      <p>{time}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p>{temp}&#176;</p>
    </div>
  )
}

export default Daily