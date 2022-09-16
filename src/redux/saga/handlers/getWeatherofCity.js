import { call, put } from 'redux-saga/effects';
import getWeather from '../request/getWeather';
import { actions } from './../../constant/index';

const getWeatherofCity = function* (action) {
    yield put({type: actions.IS_FETCHING})
    const {response, error} = yield call(getWeather, action.city)
    if(response){ 
        yield put({type: actions.RES_GET_WEATHER, weather: response.data})
        yield put({type: actions.FETCHING_DONE})
    } else{
        yield put({type: actions.ERROR, error: error.response.data.message})
    }

}

export default getWeatherofCity