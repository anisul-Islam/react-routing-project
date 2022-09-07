import React, { useEffect, useState } from 'react';
import Footer from './layout/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/header/Header';
import SingleProduct from './components/SingleProduct';
const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        {' '}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
