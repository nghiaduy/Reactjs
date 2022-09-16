import React from 'react'
import { getDate } from '../../unit'
import Title from '../Title'

const WeatherDetail = ({cityName, images, temp, date, clouds, description}) => {
  return (
    <div className='bar'>
        {
            <>
            <div className='city-name'>
                <img className="image" src={images} alt="" />
                <Title title={cityName}/>
            </div>
            <div children="text-start" className='temp'>
                <h2 className="text">{temp} <span>&#8451;</span></h2>
            </div>
            <div className="time">{date}</div>
            <div className="desc">
                {description}
            </div>
            <div className="clound">
                <span className="mr-2">Clouds: </span>
                <span>{clouds} &#37;</span>
            </div>
            </>
        }
    </div>
  )
}

export default WeatherDetail