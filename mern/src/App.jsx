
//import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';
import './styles/styles.css'
import Login from './pages/Login';
import Registro from './pages/Registro';
import Admin from './pages/admin/Index';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import AuthLayout from './layouts/AuthLayout';
import Vehiculo from './pages/admin/Vehiculo';
import Cliente from './pages/admin/Cliente';
//desde la v6 Switch es  ahora Routes
//<Route path='/Home' element={<Home/>}></Route>
/*<Router>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <PublicLayout>
          <Route path='/' element={<Index/>}></Route>
          </PublicLayout>
        </Routes>
      </Router> */
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path={['/admin','/admin/vehiculos','/admin/clientes']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/vehiculos'>
                  <Vehiculo></Vehiculo>
                </Route>
                <Route path='/admin/clientes'>
                  <Cliente></Cliente>
                </Route>
                <Route path='/admin'>
                  <Admin/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>

          <Route path={['/login','/registro']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route path='/registro'>
                  <Registro></Registro>
                </Route>
              </Switch>
            </AuthLayout>
          </Route>

          <Route path={['/']}>
            <PublicLayout>
              <Switch>
                <Route path='/'>
                  <Index></Index>
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
