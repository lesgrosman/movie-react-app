import { Divider, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  rootTop: {
    paddingTop: '100px',
    display: 'flex',
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  divider: {
    marginLeft: '30px',
    height: '100%',
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    paddingLeft: '50px',
  },
})

interface Props {
  imageNode: React.ReactNode
  centralNode: React.ReactNode
  rightNode: React.ReactNode
}

const MovieMainContent = ({ imageNode, centralNode, rightNode }: Props) => {
  const classes = useStyles()

  return (
    <Grid className={classes.rootTop} item container>
      <Grid className={classes.left} item md={3}>
        {imageNode}
        <Divider className={classes.divider} orientation='vertical' light flexItem />
      </Grid>
      <Grid item md={6}>
        <div className={classes.about}>{centralNode}</div>
      </Grid>
      <Grid className={classes.right} item md={3}>
        {rightNode}
      </Grid>
    </Grid>
  )
}

export default MovieMainContent
