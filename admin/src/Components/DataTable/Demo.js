import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import save from '../Image/wiev.svg';
import edit from '../Image/edit.svg';
import deleteproduct from '../Image/delete.svg'
import truec from '../Image/Vector.svg'
import './style.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function Demo() {

  const [ rows , setRows ] = React.useState([])

  React.useEffect(() => {
    axios.get('https://api.yengilcredit.uz/product/list')
     .then(list => {
         setRows(list.data.content);
        })
  })
  console.log(rows);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700  }} aria-label="customized table">
        <TableHead>
          <TableRow    >
            <StyledTableCell className='StyledTableCell' >ID</StyledTableCell>
            <StyledTableCell className='StyledTableCell' align="left" >Mahsulot</StyledTableCell>
            <StyledTableCell className='StyledTableCell' align="left">Mahsulot turkumi</StyledTableCell>
            <StyledTableCell className='StyledTableCell' align="left">Narx</StyledTableCell>
            <StyledTableCell className='StyledTableCell' align="left" typeof='boolean'>Holat</StyledTableCell>
            <StyledTableCell className='StyledTableCell' align="left">Sana</StyledTableCell>
            <StyledTableCell className='StyledTableCell' align="center">Amallar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.short_name}</StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left" typeof='boolean'>{row.availability === true ? 'Sotuvda' : 'Sotuvda mavjud emas'}</StyledTableCell>
              <StyledTableCell align="left">{row.register_date}</StyledTableCell>
              <StyledTableCell align="left">
              <img src={save} style={{paddingLeft: 10}} alt="" />
              <img src={edit} style={{paddingLeft: 10}} alt="" />
              <img src={deleteproduct} style={{paddingLeft: 10}} alt="" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
