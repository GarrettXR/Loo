import { createStore, combineReducers } from 'redux'

import listingReducer from './reducers/listingReducer'
// import all reducers here

const rootReducer = combineReducers({
  listingReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store