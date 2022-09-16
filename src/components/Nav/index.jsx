import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../router'
import { useDebounce } from '../../hooks'
import {connect} from 'react-redux'
import {clearCityData, getCity, getWeather, searchCities, setCurrentCity} from '../../redux/actions'

const Nav = ({city,  isFetching, weather, handleGetCity, handleSearchCities, handleGetWeather, handleClearCity, currentCity}) => {
  const [text, setText] = useState('')  

  const value = useDebounce(text, 500) 
  useEffect(() => {
    if(!value.trim()) {
      handleClearCity()
      return
    }
    handleSearchCities(value)
  }, [value])

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(position => {
      handleGetWeather({lat: position.coords.latitude, lon: position.coords.longitude})
      handleGetCity({lat: position.coords.latitude, lon: position.coords.longitude})
    })
  }, [])

  const handleSetValue =(value) => {
    handleGetWeather(value)
    setText('')
  }

  return (
    <div className="list">
      <ul className='items-center'>
        {routes.map((route, i) => 
          <li key={i} className="item">
            <NavLink to={route.path} className={({ isActive }) => (isActive ? 'active' : '')} >{route.name}</NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProp = (state) => ({
  city: state.data.city,
  weather: state.data.weather,
  isFetching: state.data.isFetching,
  currentCity: state.data.currentCity
})
const mapDispatchToProp = (dispatch) => {
  return {
    handleSearchCities(value) {
      console.log(value)
      dispatch(searchCities(value))
    },
    handleGetCity(value) {
      dispatch(getCity(value))
    },
    handleGetWeather(value) {
      dispatch(getWeather(value))
      dispatch(setCurrentCity(value))
    },
    handleClearCity() {
      dispatch(clearCityData())
    }
  }
}


export default connect(mapStateToProp, mapDispatchToProp)(Nav)