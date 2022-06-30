import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CartProvider from './contexts/CartContext';
import ProductDetailContainer from './pages/ProductDetailContainer';
import ProductListContainer from './pages/ProductListContainer';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ProductListContainer />} />
          <Route path='/home' element={<ProductListContainer />} />
          <Route path='/category/:category' element={<ProductListContainer />} />
          <Route path='/item/:id' element={<ProductDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
