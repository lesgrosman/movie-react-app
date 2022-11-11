import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  image: {
    borderRadius: '10px',
  },
  bottomTitle: {
    marginBottom: '15px',
    fontWeight: 500,
  },
  rankStars: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  rankTop: {
    display: 'inline-block',
    color: rankAverage => (rankAverage >= 7 ? '#00e676' : rankAverage < 5 ? '#c50e29' : '#b0bec5'),
    fontWeight: 500,
    marginRight: '10px',
  },
  cast: {
    marginTop: '30px',
  },
  rank: {
    marginLeft: '20px',
  },
  rankSecondary: {
    display: 'inline-block',
    color: 'rgba(255,255,255, .5)',
    align: 'bottom',
  },
}))
