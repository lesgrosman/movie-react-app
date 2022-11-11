import { Nullable } from 'utils/types'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  table: {
    width: '100%',
    marginTop: '30px',
    color: 'white',
  },
  name: {
    color: 'rgba(255,255,255, 0.5)',
    margin: '10px',
    borderBottomColor: 'rgba(255,255,255, 0.2)',
  },
  info: {
    color: 'white',
    borderBottomColor: 'rgba(255,255,255, 0.2)',
  },
  head: {
    '& .MuiTypography-root': {
      marginLeft: '15px',
    },
  },
}))

interface Props {
  year?: string
  countries: string
  genres: string
  tagline?: Nullable<string>
  directors: string
  writers: string
  producers: string
}

export default function AboutTable({
  year = '',
  countries,
  genres,
  tagline = '',
  directors,
  writers,
  producers,
}: Props) {
  const classes = useStyles()

  const createData = (name: string, info: string) => {
    return { name, info }
  }

  const rowsMovie = [
    createData('Year', year),
    createData('Countries', countries),
    createData('Genres', genres),
    createData('Slogan', tagline || '-'),
    createData('Director', directors),
    createData('Writer', writers),
    createData('Producer', producers),
  ]

  const rows = rowsMovie

  return (
    <TableContainer>
      <Table className={classes.table} size='small' aria-label='a dense table'>
        <TableHead className={classes.head}>
          <Typography variant='h6' id='tableTitle' component='div'>
            Info
          </Typography>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell className={classes.name} component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell className={classes.info} align='left'>
                {Array.isArray(row.info) && row.info.length !== 0
                  ? row.info.join(', ')
                  : !row.info
                  ? '-'
                  : row.info}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
