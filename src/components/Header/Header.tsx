import { AppBar, Button, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import SearchInput from '../SearchInput/SearchInput'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    overFlow: 'hidden',
    background: 'rgba(8, 27, 64, 1)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(20),
    color: 'inherit',
  },
}))

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

console.log('error')

const Header = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('cs')
    } else {
      i18n.changeLanguage('en')
    }
  }

  return (
    <HideOnScroll>
      <AppBar position='fixed'>
        <Toolbar className={classes.root}>
          <Button component={Link} to='/' className={classes.title}>
            {t('main.logo')}
          </Button>
          <SearchInput />
          <Button className={classes.title} onClick={handleChangeLanguage}>
            {i18n.language}
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
