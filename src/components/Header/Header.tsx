import { AppBar, Button, Toolbar } from '@material-ui/core'
import Link from 'next/link'
import SearchInput from '../SearchInput/SearchInput'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HideOnScroll = (props: any) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const Header = () => {
  return (
    <HideOnScroll>
      <AppBar position='fixed'>
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            overflow: 'hidden',
            background: 'rgba(8, 27, 64, 1)',
          }}
        >
          <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'inherit',
              }}
            >
              Home page
            </Button>
          </Link>

          <SearchInput />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
