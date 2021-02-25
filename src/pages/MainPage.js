import React from 'react'
import shortid from 'shortid'
import MovieGroup from '../components/MovieGroup/MovieGroup'

const MainPage = () => {
  
  // Array of 4 content groups. SearchBy and param are arguments for filtering requests(folder services)
  const groups = [ 
    {name: 'Popular Movies', searchBy: 'type', param: 'movie', type: 'movie'}, 
    {name: 'Popular Series', searchBy: 'type', param: 'tv', type: 'tv'},
    {name: 'Family', searchBy: 'genre', param: '10751', type: 'movie'},
    {name: 'Documentary', searchBy: 'genre', param: '99', type: 'movie'},
  ]

  const renderLists = (groups) => {
    return groups.map(({ name, searchBy, param, type }) => {
      return (
        <MovieGroup 
          key={shortid.generate()} 
          searchBy={searchBy} 
          name={name} 
          param={param}
          type={type}
        />
      )
    })
  }


  return (
    <div>
      {renderLists(groups)}
    </div>
  )
}

export default MainPage
