import {actions} from '../constant'

const defaultLocation = [
    {
      name: 'Ha Noi',
      lat:21.0294498,
      lon:105.8544441
    }
  ]
  
localStorage.setItem('cities',JSON.stringify(defaultLocation))

const initSate = {
    city: [],
    weather: null, 
    error: null,
    currentCity: null,
    isFetching: false,
}

const reducer = (state = initSate, action) => {

    switch (action.type) {
        case actions.RES_SEARCH_CITIES:
            return {...state, city: action.city};
        case actions.RES_GET_WEATHER:
            return {...state, weather: action.weather};
        case actions.ERROR: 
            return {...state, error: action.error}
        case actions.CLEAR_CITY: 
            return {...state, city: []}
        case actions.IS_FETCHING: 
            return {...state, isFetching: true}
        case actions.FETCHING_DONE: 
            return {...state, isFetching: false}
        case actions.SET_CUREENT_CITY: 
            return {...state, currentCity: action.city}
        default:
            return state;
    }
}

export default reducer