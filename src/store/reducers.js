import { combineReducers } from 'redux'
import locationReducer from './location'
import userReducer from './userReducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    user : userReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
