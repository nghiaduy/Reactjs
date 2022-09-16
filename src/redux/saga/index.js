import {takeLatest} from 'redux-saga/effects'
import {actions} from '../constant'
import handleSearchCities from './handlers/handleSearchCities'
import getWeatherofCity from './handlers/getWeatherofCity'
import getCity from './handlers/getCity'

const rootSaga = function* () {
   yield takeLatest(actions.SEARCH_CITIES, handleSearchCities)
   yield takeLatest(actions.GET_WEATHER, getWeatherofCity)
   yield takeLatest(actions.GET_CITY, getCity)
}

export default rootSaga