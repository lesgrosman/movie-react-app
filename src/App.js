import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage'
import PlayerPage from './components/PlayerPage/PlayerPage'
import SearchPage from './components/SearchPage/SearchPage'
import Wrapper from './components/Wrapper/Wrapper'

function App() { // Main component with routes
  return (
    <Router>
      <Wrapper>
        <Header />
        <Route path="/" exact component={MainPage}/>
        <Route path="/search_page" component={SearchPage} />
        <Route path="/movie/:id" render={
          ({match}) => {
            const {id} = match.params
            const type = match.path.slice(1, 6) // pass prop "type"(movie or tv) and ID from history
            return <MovieDetailPage type={type} movieId={id}/>
          }
        }/>
        <Route path="/tv/:id" render={
          ({match}) => {
            const {id} = match.params
            const type = match.path.slice(1, 3) // pass prop "type"(movie or tv) and ID from history
            return <MovieDetailPage type={type} movieId={id}/>
          }
        }/>
        <Route path="/player/" component={PlayerPage}/>
      </Wrapper>
    </Router>

  )
}

export default App
