import { InputBase } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(
        theme.palette.common.white,
        0.25,
      ),
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
  const history = useHistory()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data, e) => {
    e.target.reset()
    history.push(`/results${data.query}`)
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
          placeholder='Search movie'
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
