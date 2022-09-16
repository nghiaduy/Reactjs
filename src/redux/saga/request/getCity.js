import { getWeatherCity } from "../../../api"

const getCity = (city) => {
   return getWeatherCity(city)
        .then(response  => ({response }))
        .catch(error  => ({error }))
}

export default getCity