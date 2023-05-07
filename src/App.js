import React, {useState} from 'react';
import {Routes, BrowserRouter as Router , Route} from 'react-router-dom';
import Ap from './component/Admin';
import Formm from './component/Formm';
import axios from 'axios';

function App () {
  

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route eaxct path='/' element={<Formm/>}/>
          <Route path='/image' element={<Ap/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;