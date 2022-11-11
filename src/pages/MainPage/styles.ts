import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTypography-root': {
      textAlign: 'center',
      marginBottom: theme.typography.pxToRem(25),
    },
    '& .MuiTypography-root:first-child': {
      marginTop: theme.typography.pxToRem(25),
    },
  },
  skeletonCard: {
    marginBottom: theme.typography.pxToRem(25),
  },
}))
