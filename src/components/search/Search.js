import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { STOP_SEARCH, startSearch } from '../../redux/actions/search'
import { debounce } from '../home/Cards'
import SearchForm from './SearchForm'

const Search = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  const handleChange = debounce(function (e) {
    dispatch(startSearch(e.target.value))
  }, 300)

  const handleSubmit = value => {
    console.log(value)
  }

  const handleFocus = () => {
    if (pathname !== '/scout') {
      history.push('/scout')
    }
  }

  const handleBlur = () => {
    dispatch({ type: STOP_SEARCH })
  }

  return (
    <div>
      <SearchForm
        onBlur={handleBlur}
        onFocus={handleFocus}
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Search
