import { call, put } from 'redux-saga/effects';
import getCityHandler from '../request/getCity';
import { actions } from '../../constant/index';

const getCity = function* (action) {
    yield put({type: actions.IS_FETCHING})
    const {response, error} = yield call(getCityHandler, action.city)
    console.log(action)
    if(response){ 
        yield put({type: actions.SET_CUREENT_CITY, city: response.data})
        yield put({type: actions.FETCHING_DONE})
    } else{
        yield put({type: actions.ERROR, error: error.response.data.message})
    }

}

export default getCity