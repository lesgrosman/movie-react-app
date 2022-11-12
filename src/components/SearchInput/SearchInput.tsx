import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { InputBase } from '@material-ui/core'
import { alpha, makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const SearchInput = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = data => {
    reset()
    navigate(`/results${data.query}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          inputRef={register}
          name='query'
          placeholder={t('main.search')}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </form>
  )
}

export default SearchInput
