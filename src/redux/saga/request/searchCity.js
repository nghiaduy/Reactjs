import axios from 'axios'
import { searchListCities } from '../../../api'

const searchCity = (city) => {
   return searchListCities(city)
        .then(response  => ({response }))
        .catch(error  => ({error }))
}

export default searchCity