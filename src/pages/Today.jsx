import React from 'react'
import CardWeather from '../components/WeatherCard'
import { connect } from 'react-redux'
import { RiSunLine, RiWindyFill, RiSunFoggyLine, RiHazeLine, RiThermometerLine, RiWaterFlashFill, RiGpsLine } from 'react-icons/ri'
import { getDate } from '../unit'


const renderBody = (content) => (
  <div className='index'>
    {content.map((item, i) => {
      return (
        <div key={i} className="wrap">
          {item.icon}
          <p className="text-index">{item.value}{item.unit && item.unit}</p>
        </div>
      )
    })}
  </div>
)

const Today = ({ cunrrentWeather, hourlyWeather, weather, currentCity }) => {

  const currentHour = getDate(Math.floor(Date.now() / 1000),{hour: 'numeric'})

  return (
    <div>
      <div className="items today">
        {cunrrentWeather.map((card, i) => {
          return <CardWeather key={i} body={() => renderBody(card.content)} heading={card.heading}/>
        })}

      </div>

    </div>
  )
}

const mapStateToProp = (state) => {
  const cunrrentWeather = state.data.weather?.current
  const hourlyWeather = state.data.weather?.hourly
  if (cunrrentWeather && hourlyWeather)
    return {
      cunrrentWeather: [
        {
          heading: 'UV index',
          content: [
            {
              unit: null,
              icon: <RiSunLine className="icon-svg" />,
              value: cunrrentWeather.uvi
            }
          ]
        },
        {
          heading: 'wind speed',
          content: [
            {
              unit: 'km/h',
              icon: <RiWindyFill className="icon-svg" />,
              value: cunrrentWeather.wind_speed
            }
          ]
        },
        {
          heading: 'sunride & sunset',
          content: [
            {
              unit: null,
              icon: <RiSunFoggyLine className="icon-svg" />,
              value: getDate(cunrrentWeather.sunrise, { hour: 'numeric', minute: 'numeric', hour12: true })
            },
            {
              unit: null,
              icon: <RiHazeLine className="icon-svg" />,
              value:  getDate(cunrrentWeather.sunset, { hour: 'numeric', minute: 'numeric', hour12: true })
            }
          ]
        },
        {
          heading: 'visibility',
          content: [
            {
              unit: 'km',
              icon: <RiGpsLine  className="icon-svg"/>,
              value: cunrrentWeather.humidity
            }
          ]
        },
        {
          heading: 'humidity',
          content: [
            {
              unit: '%',
              icon: <RiWaterFlashFill className="icon-svg" />,
              value: cunrrentWeather.humidity
            }
          ]
        },
        {
          heading: 'pressure',
          content: [
            {
              unit: null,
              icon: <RiThermometerLine  className="icon-svg" />,
              value: cunrrentWeather.pressure
            }
          ]
        }
      ],
      hourlyWeather: hourlyWeather.slice(0, 24),
      weather: state.data.weather,
      isFetching: state.data.isFetching,
      currentCity: state.data.currentCity,
    }
  else return { cunrrentWeather: [], hourlyWeather: [] }
}


export default connect(mapStateToProp)(Today)