import React from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [elements, setElements] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setElements(json.elements);
      });
  }, []);

  console.log(elements);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={elements} />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
