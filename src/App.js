import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProductDetailContainer from './pages/ProductDetailContainer';
import ProductListContainer from './pages/ProductListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ProductListContainer />} />
          <Route path='/home' element={<ProductListContainer />} />
          <Route path='/category/:category' element={<ProductListContainer />} />
          <Route path='/item/:id' element={<ProductDetailContainer />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
