import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

let SearchForm = ({ handleChange, handleSubmit, onFocus, handleBlur }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          placeholder='Find a learning session for any topic...'
          size='large'
          onClick={onFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          component='input'
          name='search'
          style={{
            width: 500,
            alignSelf: 'center',
            height: 60,
            paddingLeft: 30,
            fontSize: '16px',
            borderRadius: '7px',
            backgroundColor: 'rgba(253, 253, 253, 0.95)'
          }}
        />
      </form>
    </div>
  )
}
SearchForm = reduxForm({
  form: 'search'
})(SearchForm)

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
}

export default SearchForm
