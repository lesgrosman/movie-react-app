import { genresSection, popularSection, trendingSection } from 'utils/constants'
import Container from 'components/Container'
import HeroMain from './HeroMain'
import MovieSection from './MovieSection'

const MainPage = () => {
  return (
    <Container>
      <HeroMain />
      <MovieSection section={popularSection} innerClassName='w-1/4' />
      <MovieSection section={genresSection} innerClassName='w-1/2' />
      <MovieSection section={trendingSection} innerClassName='w-1/3' />
    </Container>
  )
}

export default MainPage
