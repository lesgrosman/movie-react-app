import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}))

const SearchInput = () => {
  const classes = useStyles()
  const router = useRouter()

  const { register, handleSubmit, reset } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = data => {
    reset()
    router.push(`/search/${data.query}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          position: 'relative',
          borderRadius: 6,
          backgroundColor: 'gray',
          marginLeft: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            padding: '0 8px',
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SearchIcon />
        </div>
        <InputBase
          inputRef={register}
          name='query'
          placeholder='Search'
          classes={{
            root: 'color: inherit',
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </form>
  )
}

export default SearchInput
