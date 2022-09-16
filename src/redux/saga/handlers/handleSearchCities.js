import searchCities from '../request/searchCity'
import {call, put} from 'redux-saga/effects'
import { actions } from '../../constant'

const handleSearchCities = function* (action) {
   yield put({type: actions.IS_FETCHING})
   const {response, error} = yield call(searchCities, action.city)
   if(response){ 
      yield put({type: actions.RES_SEARCH_CITIES, city: response.data}) 
      yield put({type: actions.FETCHING_DONE})
   } else yield put({type: actions.ERROR, error: error.response.data.message})
}

export default handleSearchCities