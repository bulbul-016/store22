import React from 'react';
// import { useDispatch } from 'react-redux';
import { Header } from './components';
import { Home, Cart } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//npx json-server -w public/db.json -p=3001

function App() {

  // const dispatch = useDispatch();
  

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} exact/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;