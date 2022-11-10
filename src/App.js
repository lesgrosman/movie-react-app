import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from './utils/GlobalStyles'
import Header from './components/Header/Header'
import MainAppPage from './pages/MainAppPage'
import Wrapper from './components/Wrapper/Wrapper'

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Wrapper>
      <MainAppPage />
    </Wrapper>
  </Router>
)

export default App
