import React from 'react'

import { BrowserRouter, Route,  } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Customers from '../Pages/Customers'


const Routes = () => {
  return (
    <BrowserRouter>
        <Route path='/' component={Dashboard}/>
        <Route path='/customers' component={Customers}/>
    </BrowserRouter>
  )
}

export default Routes