import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage'
import DetailPage from './pages/DetailPage/DetailPage'
import SearchResultPage from './pages/SearchResultPage/SearchResultPage'
import Wrapper from './components/Wrapper/Wrapper'

function App() { 
  return (
    <Router>
      <Header />
      <Wrapper>
        <Route path="/" exact component={MainPage}/>
        <Route path="/movie/:id" render={
          ({match}) => {
            const {id} = match.params
            const type = match.path.slice(1, 6)
            return <DetailPage type={type} movieId={id}/>
          }
        }/>
        <Route path="/tv/:id" render={
          ({match}) => {
            const {id} = match.params
            const type = match.path.slice(1, 3)
            return <DetailPage type={type} movieId={id}/>
          }
        }/>
        <Route path="/results:query" render={
          ({match}) => {
            const {query} = match.params
            return <SearchResultPage query={query}/>
          }
        }/>
        <Route path="/person/:id" render={
          ({match}) => {
            const {id} = match.params
            return <DetailPage personId={id}/>
          }
        }/>
      </Wrapper>
    </Router>

  )
}

export default App
