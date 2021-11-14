//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Pagina1 from "./pages/Pagina1";
import Home from './pages/Home';
import Layout from './layouts/Layout';

//desde la v6 Switch es  ahora Routes
//<Route path='/Home' element={<Home/>}></Route>
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
        <Routes>
          <Route path='/page1' element={<Pagina1 />}></Route>
          <Route path='/page2' element={<Pagina1 />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
