import {configureStore}  from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducer'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: {
        data: rootReducer
    },
    middleware
})

sagaMiddleware.run(rootSaga)

export default store