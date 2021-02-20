import React from 'react'
import shortid from 'shortid'
import MovieGroup from '../../components/MovieGroup/MovieGroup'
import classes from './MainPage.module.css'

const MainPage = () => {
  
  // Array of 4 content groups. SearchBy and param are arguments for filtering requests(folder services)
  const groups = [ 
    {name: 'Popular Movies', searchBy: 'type', param: 'movie'}, 
    {name: 'Popular Series', searchBy: 'type', param: 'tv'},
    {name: 'Family', searchBy: 'genre', param: '10751'},
    {name: 'Documentary', searchBy: 'genre', param: '99'},
  ]

  const renderLists = (groups) => {
    return groups.map(({ name, searchBy, param }, i) => {
      return (
        <MovieGroup 
          key={shortid.generate()} 
          searchBy={searchBy} 
          name={name} 
          param={param} 
        />
      )
    })
  }

  return (
    <div className={classes.MainPage}>
      {renderLists(groups)}
    </div>
  )
}

export default MainPage
