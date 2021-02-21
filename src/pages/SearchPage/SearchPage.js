import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import MovieGroup from '../../components/MovieGroup/MovieGroup'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, Typography, Input } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '20px',
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center'
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    marginTop: '40px'
  },
}));

const SearchPage = () => {
  const classes = useStyles()

  const [query, setQuery] = useState(null) // Parametr for request
  const [visible, setVisible] = useState(false) // Visibility of content after after submit

  const {register, handleSubmit} = useForm()

  const onSubmit = (data, e) => {
    e.target.reset()
    setVisible(true)
    setQuery(data.query)
    console.log(data.query)
  }

  return (
    <div>
    <Grid container className={classes.container}>
      <Grid item>
        <Typography variant="h3">Search Page</Typography>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <TextField
            name="query" 
            inputRef={register}
            label="Type a movie title" 
          />
        </form>
      </Grid>
    </Grid>   
      { 
        visible 
        ? <MovieGroup 
            name="Search results"
            param={query}
          />
        : null
      } 
    </div>

  )
}

export default SearchPage
