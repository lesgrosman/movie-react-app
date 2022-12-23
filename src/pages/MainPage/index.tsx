import { genresSection, popularSection, trendeingSection } from 'utils/constants'
import Hero from 'components/Hero'
import MovieSection from './MovieSection'

const MainPage = () => {
  return (
    <div>
      <Hero />
      <MovieSection section={popularSection} innerClassName='w-1/4' />
      <MovieSection section={genresSection} innerClassName='w-1/2' />
      <MovieSection section={trendeingSection} innerClassName='w-1/3' />
    </div>
  )
}

export default MainPage
