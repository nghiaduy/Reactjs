import {actions} from '../constant'

export const searchCities = (city) => {
    return ({
        type: actions.SEARCH_CITIES,
        city
    })
}

export const getCity = (city) => {
    return ({
        type: actions.GET_CITY,
        city
    })
}


export const getWeather = (city) => {
    return ({
        type: actions.GET_WEATHER,
        city
    })
}

export const clearCityData = (city) => {
    return ({
        type: actions.CLEAR_CITY
    })
}

export const isFetching = () => {
    return ({
        type: actions.IS_FETCHING
    })
}

export const FETCHING_DONE = () => {
    return ({
        type: actions.FETCHING_DONE
    })
}

export const setCurrentCity = (city) => {
    return ({
        type: actions.SET_CUREENT_CITY,
        city
    })
}