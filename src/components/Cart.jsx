import * as React from 'react';
import SideBarCategories from './Product/SideBarCategories';
import { Description } from '@mui/icons-material';


const container = {
    display:'flex',
    justifyContent:'center',
    width:'100%',
    // border:'1px solid green',
    fontFamily:'Arial, sans-serif',
    marginTop:'30px',
    marginBottom:'30px',
};
const innerContainer = {
    display:'flex',
    justifyContent:'center',
    width:'80%',
    // border:'1px solid green',
    maxWidth:'1500px',
};
const productContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    width:'80%',
    border:'1px solid silver',
    borderTop:'1px solid silver',
    marginLeft:'15px',
};
const cartTitle = {
    display:'flex',
    justifyContent:'start',
    // border:'1px solid green',
    borderBottom:'1px solid silver',
    fontSize:'20px',
    // color:'#a01010',
    fontWeight:'600',
    paddingBottom:'15px',
    margin:'15px 0px 15px 15px'
};
const productInfoContainer = {
    display:'flex',
    height:'170px',
    // border:'1px solid green',
    width:'100%',
    borderBottom:'1px solid silver',
};
const checkBoxContainer = {
    display:'flex',
    justifyContent:'center',
    border:'1px solid green',
    width:'10%',
    // fontFamily:'Arial, sans-serif'
};
const imageContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border:'1px solid green',
    width:'25%',
    // fontFamily:'Arial, sans-serif'
};
const descriptionContainer = {
    display:'flex',
    justifyContent:'center',
    border:'1px solid green',
    width:'50%',
    // fontFamily:'Arial, sans-serif'
};
const priceContainer = {
    display:'flex',
    justifyContent:'center',
    border:'1px solid green',
    width:'15%',
};

function Cart(props){
    
    return (
        <div>
        {/* <div style={backgroundColor}></div> */}
        <div style={container}>
            <div style={innerContainer}>
                <SideBarCategories/>
                <div style={productContainer}>
                    <div style={cartTitle}>Shopping Cart</div>
                    <div style={productInfoContainer}>
                        <div style={checkBoxContainer}><input type="checkbox"/></div>
                        <div style={imageContainer}><img src="C:/Users/lwiltshire/Desktop/AWS/book-store/src/image/book1.png" /></div>
                        <div style={descriptionContainer}></div>
                        <div style={priceContainer}></div>

                       
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}
export default Cart;
