// import { SEARCH_STARTED, SEARCH_SUCCESS, SEARCH_ERROR, STOP_SEARCH } from '../actions/search'

// export default (
//   state = {
//     searching: false,
//     workshops: [],
//     error: false
//   },
//   action
// ) => {
//   switch (action.type) {
//     case SEARCH_STARTED:
//       return {
//         ...state,
//         searching: true
//       }

//     case SEARCH_SUCCESS:
//       return {
//         ...state,
//         workshops: action.payload
//       }

//     case STOP_SEARCH:
//       return {
//         ...state,
//         searching: false
//       }

//     case SEARCH_ERROR:
//       return {
//         ...state,
//         searching: false,
//         error: true,
//         workshops: []
//       }

//     default:
//       return state
//   }
// }
