import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useGlobalStyles = makeStyles(
  () =>
    createStyles({
      '@global': {
        '.MuiSkeleton-root': {
          // background: 'rgba(82, 101, 164, 1)',
          background: 'linear-gradient(67.49deg, #237BB8 -8.15%, #081B40 89.39%)',
        },
      },
    }),
  { index: 999 }
)

const GlobalStyles = () => {
  useGlobalStyles()

  return null
}

export default GlobalStyles
