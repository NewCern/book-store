import * as React from 'react';
import Navbar from './components/Navbar';
import SplashImage from './components/SplashImage';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Product from './components/Product/Product';
// import './App.css';

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
      <Product/>
      {/* <SplashImage/>
      <Categories/> */}
      <Footer/>
    </div>
  );
}

export default App;
