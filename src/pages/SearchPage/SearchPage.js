import React, { useState } from 'react'
import MovieGroup from '../../components/MovieGroup/MovieGroup'
import classes from "./SearchPage.module.css"


const SearchPage = () => {

  const [input, setInput] = useState('') // Variable for setting an empty string after submit
  const [query, setQuery] = useState('') // Parametr for request
  const [visible, setVisible] = useState(false) // Visibility of content after after submit

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setVisible(true)
    setQuery(input)
    setInput('')
  }

  return (
    <div className={classes.SearchPage}>
      <h1>Search Page</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a movie title..."
        />
      </form>
      { 
        visible 
        ? <MovieGroup 
            name="Search results"
            param={query}
          />
        : null
      }     
    </div>
  )
}

export default SearchPage
