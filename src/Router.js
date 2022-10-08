import {BrowserRouter,Routes, Route} from 'react-router-dom'

import Register from './Components/pages/Register/Register.js'
import Login from './Components/pages/Login/Login'
import Authorization from './Components/pages/Authorization/authorization';
import Home from './Components/pages/Home/Home'
import DishTypes from './Components/pages/DishTypes/DishTypes.js';

function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/authorization' element={<Authorization/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dishtypes' element={<DishTypes/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default Router;