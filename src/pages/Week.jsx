import React, { useEffect, useState } from 'react'
import CardWeather from '../components/WeatherCard'
import { connect } from 'react-redux'
import { getDate } from '../unit'


const renderBody = (card) => {
  const icon = card?.weather[0]?.icon
  const min = Math.round(card?.temp?.min - 273)
  const max = Math.round(card?.temp?.max - 273)
  return (
    <div className='items-center'>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <div className='celsius weight-bold'>
          <span className='cel-min'>{min}&#176;</span>
          <span className='cel'> - </span>
          <span className='cel-max'>{max}&#176;</span>
        </div>
    </div>
  )
}


const initialWeater = {
    id: '',
    tempCurrent: '',
    humidity: '',
    windSpeed: '',
    min: '',
    max: '',
    sunrise: '',
    sunset: '',
    description: '',
    pressure: '',
    ngay: ''
}

const Week = ({weekWeatherData}) => {
  const [currentWeather, setCurrentWeather] = useState(initialWeater);

  const handleSetWeather = (weather) => {
    const data = {
        id: weather.id,
        tempCurrent: Math.round(weather.temp.day - 273),
        humidity: weather.humidity,
        windSpeed: weather.wind_speed,
        min: Math.round(weather.temp.min - 273),
        max: Math.round(weather.temp.max - 273),
        sunrise: getDate(weather.sunrise, { hour: 'numeric', minute: 'numeric', hour12: true }),
        sunset: getDate(weather.sunset, { hour: 'numeric', minute: 'numeric', hour12: true }),
        description: weather.weather[0].description,
        pressure: weather.pressure,
        ngay: getDate(weather.dt, {weekday:'short', month: 'numeric', day: 'numeric' })
    }
    setCurrentWeather(data)
  }

  useEffect(() => {
    if(weekWeatherData.length > 0) {
      handleSetWeather({...weekWeatherData[0], id: 0})
    }
  }, [weekWeatherData])
 
  return (
    <div>
      <div className="grid-week items">
        {weekWeatherData.map((weather, i) => {
          const date = getDate(weather.dt, {weekday:'short', month: 'numeric', day: 'numeric' })
          return <CardWeather key={i} body={() => renderBody(weather)} handleOnclick={() => handleSetWeather({...weather, id: i})}  hover={true}  heading={date} active={currentWeather.id === i}/>
        })}
      </div>
      {currentWeather && (
        <div className='short-info'>
            <div className='rounded-date weight-bold'>{currentWeather.ngay}</div>
            <div className="rounded-mid">
                <div className='left w-50'>
                    <p className="text-lg">Temp current: <span className="text-main">{currentWeather.tempCurrent}&#8451;</span></p>
                    <p className="text-lg">Temp: <span className="text-main" dangerouslySetInnerHTML={{__html: `${currentWeather.min}&#8451; - ${currentWeather.max}&#8451;`}} /></p>
                    <p className="text-lg">Humidity: <span className="text-main">{currentWeather.humidity} &#x25;</span></p>
                    <p className="text-lg">Wind Speed: <span className="text-main">{currentWeather.windSpeed} km/h</span></p>
                </div>
                <div className='right w-50'>
                    <p className="text-lg">Sunrise: <span className="text-main">{currentWeather.sunrise}</span></p>
                    <p className="text-lg">Sunset: <span className="text-main">{currentWeather.sunset}</span></p>
                    <p className="text-lg">Description: <span className="text-main">{currentWeather.description}</span></p>
                    <p className="text-lg">Atmostpheric Pressure: <span className="text-main">{currentWeather.pressure} hpa</span></p>
                </div>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProp = (state) => {
  return {
    weekWeatherData: state.data.weather?.daily ? state.data.weather.daily : []
  }
}

 
export default connect(mapStateToProp)(Week)