import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  table: {
    // minWidth: 400,
    width: '100%',
    marginTop: '30px'
  },
  row: {
    padding: '20px'
  },
  name: {
    color: 'rgba(31,31,31,.5)',
    margin: '10px'
  }
});

export default function AboutTable({movie, type}) {
  const classes = useStyles();

  function createData(name, info) {
    return { name, info};
  }
  
  const rows = [
    createData('Year', movie.year),
    createData('Countries', movie.countries),
    createData('Genres', movie.genres),
    createData('Slogan', movie.tagline),
    createData('Director', movie.directors),
    createData('Writer', movie.writers),
    createData('Producer', movie.producers),
  ];

  return (
    <TableContainer >
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          About {type}
        </Typography>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.row} key={row.name}>
              <TableCell className={classes.name} component="th" >
                {row.name}
              </TableCell>
              <TableCell align="left">
                {
                  Array.isArray(row.info) && row.info.length !== 0 
                  ? row.info.join(', ') 
                  : row.info.length == 0 
                  ? '-' 
                  : row.info
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}