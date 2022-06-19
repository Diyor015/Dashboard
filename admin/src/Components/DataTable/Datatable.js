import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateProduct from '../CreateProduct/CreateProduct';
import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuCreate from './MenuCreate/MenuCreate';
import MenuCreateTwo from './MenuCreate/MenuCreateTwo';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Mahsulot', width: 430 },
  { field: 'short_name', headerName: 'Mahsulot turkumi', width: 250 },
  {
    field: 'price',
    headerName: 'Narx',
    type: 'number',
    width: 120,
  },
  
  
  {
    field: 'availability',
    headerName: 'Holat',
    type : 'boolean',
    width: 100,
    
  },
  { field: 'register_date', headerName: 'Sana', width: 180 },
  {field:'Events', headerName:'Amallar', width:150,  },
];



export default function DataTable() {

 const [rows, setRows] = useState([])

 useEffect(() => {
     axios.get('https://api.yengilcredit.uz/product/list')
     .then(list => {
         setRows(list.data.content);
        })
    })
    // console.log(rows);

  return (
    <div style={{ height: 400, width: '100%' }}>
     <div className='CreateProductTexts'>
     <div className='TextProducts'>
      <p className='Product' >Mahsulot</p>
    </div>
    <div className='AddProduct'>
      <CreateProduct />
    </div>
     </div>
    

    <div className='dataTableGrid'>
     <div className='borderProducts'>
     <div className='inputSearch'>
        <input type='search' placeholder='Izlash . . . '  className='inp' />
        <div className='searchIcon'>
        <SearchIcon />
        </div>
      </div>
      <div className='allProducts'>
        <MenuCreate />
        <MenuCreateTwo/>
      </div>
     </div>
    </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
  );
}
