import  { getWeatherDetail } from './../../../api/index';
const getWeather = (city) => {
  return getWeatherDetail(city)
            .then(response => ({response}))
            .catch(error => ({error}))
}

export default getWeather