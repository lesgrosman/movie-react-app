import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
    marginTop: theme.typography.pxToRem(30),
    color: theme.palette.common.white,
  },
  name: {
    color: 'rgba(255,255,255, 0.5)',
    margin: theme.typography.pxToRem(10),
    borderBottomColor: 'rgba(255,255,255, 0.2)'
  },
  info: {
    color: theme.palette.common.white,
    borderBottomColor: 'rgba(255,255,255, 0.2)'
  },
  head: {
    '& .MuiTypography-root': {
      marginLeft: theme.typography.pxToRem(15),
    },
  },
}));

export default function AboutTable({ data, type }) {
  const classes = useStyles();

  function createData(name, info) {
    return { name, info};
  }
  
  const rowsMovie = [
    createData('Year', data.year),
    createData('Countries', data.countries),
    createData('Genres', data.genres),
    createData('Slogan', data.tagline),
    createData('Director', data.directors),
    createData('Writer', data.writers),
    createData('Producer', data.producers),
  ];

  const rowsPerson = [
    createData('Name', data.name),
    createData('Gender', data.gender),
    createData('Birthday', data.birthday),
    createData('Place of Birth', data.place_of_birth),
    // data.deathday ? createData('Deathday', data.deathday) : createData('Deathday', '-')
  ];

  const rows = type === 'person' ? rowsPerson : rowsMovie

  return (
    <TableContainer >
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.head}>
          <Typography variant="h6" id="tableTitle" component="div">
            Info
          </Typography>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.name} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className={classes.info} align="left">
                {
                  Array.isArray(row.info) && row.info.length !== 0 
                  ? row.info.join(', ') 
                  : !row.info
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
