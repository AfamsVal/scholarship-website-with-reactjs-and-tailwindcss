import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'

function auth(
  state = {
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isFetching: true
      }

    default:
      return state
  }
}

const afristudApp = combineReducers({
  auth,
  intl: intlReducer
})

export default afristudApp
