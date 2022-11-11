import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppNavigator from './navigation/AppNavigator'
import GlobalStyles from './utils/GlobalStyles'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <AppNavigator />
      </Wrapper>
    </BrowserRouter>
  </QueryClientProvider>
)

export default App
