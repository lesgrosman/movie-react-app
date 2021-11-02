import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import MainAppPage from './pages/MainAppPage';

const App = () => (
  <Router>
    <Header />
    <Wrapper>
      <MainAppPage />
    </Wrapper>
  </Router>
);

export default App;

