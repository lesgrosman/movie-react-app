import { BrowserRouter } from 'react-router-dom'
import AppNavigator from './navigation/AppNavigator'
import GlobalStyles from './utils/GlobalStyles'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <Wrapper>
      <AppNavigator />
    </Wrapper>
  </BrowserRouter>
)

export default App
