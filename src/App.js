import * as React from 'react';
import Navbar from './components/Navbar';
import SplashImage from './components/SplashImage';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Product from './components/Product/Product';
import CategoriesSearch from './components/CategoriesSearch';
import Cart from './components/Cart';


const container = {
  // border:'1px solid',
  width:'100%',
  position:'absolute',
  top:'0px',
  left:'0px',
  height:'95vh',
  minWidth:'700px'
}

function App() {
  return (
    <div style={container}>
      <Navbar/>

      {/* SHOPPING CART */}
      <Cart/>

      {/* SEARCH RESULTS VIEW <---------------------------------*/}
      {/* <CategoriesSearch/> */}

      {/* PRODUCT PAGE VIEW <-----------------------------------*/}
      {/* <Product/> */}

      {/* LANDING PAGE VIEW <-----------------------------------*/}
      {/* <SplashImage/>
      <Categories/> */}

      <Footer/>
    </div>
  );
}

export default App;
