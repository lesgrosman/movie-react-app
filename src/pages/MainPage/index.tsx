import { genresSection, popularSection, trendingSection } from './constants'
import Container from 'components/Container'
import HeroMain from './HeroMain'
import MovieSection from './MovieSection'

const MainPage = () => {
  return (
    <Container>
      <HeroMain />
      <MovieSection section={popularSection} innerClassName='md:w-1/4 w-1/2' />
      <MovieSection section={genresSection} innerClassName='md:w-1/2 w-full' />
      <MovieSection section={trendingSection} innerClassName='md:w-1/3 w-3/4' />
    </Container>
  )
}

export default MainPage
