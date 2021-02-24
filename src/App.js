import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import SearchResultPage from './pages/SearchResultPage'
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
            return <DetailPage type={'movie'} id={id}/>
          }
        }/>
        <Route path="/tv/:id" render={
          ({match}) => {
            const {id} = match.params
            return <DetailPage type={'tv'} id={id}/>
          }
        }/>
        <Route path="/person/:id" render={
          ({match}) => {
            const {id} = match.params
            return <DetailPage type={'person'} id={id}/>
          }
        }/>
        <Route path="/results:query" render={
          ({match}) => {
            const {query} = match.params
            return <SearchResultPage query={query}/>
          }
        }/>

      </Wrapper>
    </Router>

  )
}

export default App
