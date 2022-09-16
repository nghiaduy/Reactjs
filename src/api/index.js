import axios from 'axios'
const API = axios.create({
    baseURL: process.env.REACT_APP_URL
})

export const searchListCities = (cityName) => {
   return API.request({
        baseURL: `${process.env.REACT_APP_URL}/geo/1.0/direct?q=${encodeURIComponent(cityName)}&type=hour&limit=5&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
        method: 'GET',
    })
}

export const getWeatherCity = (city) => {
    return API.get(`${process.env.REACT_APP_URL}/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_API_KEY}`)
}

export const getWeatherDetail = (city) => {
    return API.get(`/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_API_KEY}`)
}

export default API