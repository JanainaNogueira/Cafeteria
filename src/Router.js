import {BrowserRouter,Routes, Route} from 'react-router-dom'

import Register from './Components/pages/Register/Register.js'
import Login from './Components/pages/Login/Login'
import Authorization from './Components/pages/Authorization/authorization';

function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/authorization' element={<Authorization/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default Router;