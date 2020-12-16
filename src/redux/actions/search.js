// import fetch from 'node-fetch'
// export const SEARCH_STARTED = 'SEARCH_STARTED'
// export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
// export const SEARCH_ERROR = 'SEARCH_ERROR'
// export const STOP_SEARCH = 'STOP_SEARCH'

// export const startSearch = searchTerm => {
//   return async dispatch => {
//     dispatch({ type: SEARCH_STARTED })

//     try {
//       const response = await fetch(`https://localhost:5000/v0/workshops/search/${searchTerm}`, {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json'
//         }
//       })
//       if (response.status > 300) {
//         dispatch({ type: SEARCH_ERROR })
//       }

//       if (response.ok) {
//         const data = await response.json()
//         dispatch({ type: SEARCH_SUCCESS, payload: data })
//       }
//     } catch (error) {
//       dispatch({ type: SEARCH_ERROR })
//     }
//   }
// }
