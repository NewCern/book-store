import * as React from 'react';
import SideBarCategories from './SideBarCategories';
import { authors } from '../../../database/authors';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';

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
    minWidth:'740px',
    // border:'1px solid silver',
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
    padding:'15px 0px 15px 15px'
    // margin:'15px 0px 15px 15px'
};
const productInfoContainer = {
    display:'flex',
    height:'150px',
    width:'100%',
    paddingTop:'18px',
    borderBottom:'1px solid silver',
};
const checkBoxContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // border:'1px solid green',
    width:'10%',
};
const imageContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    alignItems:'center',
    // border:'1px solid green',
    width:'25%',
};
const imageWrapper = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'80%',
    height:'80%',
    border:'1px solid green',
    // width:'25%',
};
const descriptionContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    // border:'1px solid green',
    width:'50%',
};
const productTitle = {
    display:'flex',
    justifyContent:'start',
    // border:'1px solid green',
    fontWeight:'600',
    fontSize:'14px',
    width:'80%',
    paddingLeft:'15px',
    paddingBottom:'10px',
};
const publicationContainer = {
    display:'flex',
    flexDirection:'column',
    // border:'1px solid',
    width:'100%',
    paddingLeft:'15px'
};
const keyValuePairContainer = {
    display:'flex',
    // border:'1px solid',
    width:'100%',
};
const key = {
    display:'flex',
    // border:'1px solid',
    fontSize:'13px',
    width:'30%',
    fontWeight:'500',
};
const value = {
    display:'flex',
    // border:'1px solid',
    fontSize:'13px',
    width:'70%',
    color:'#807878'
};
const priceContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    // border:'1px solid green',
    width:'15%',
};
const price = {
    display:'flex',
    justifyContent:'end',
    // border:'1px solid green',
    fontSize:'20px',
    fontWeight:'600',
    paddingRight:'15px'
    // width:'15%',
};
const cartTotalContainer = {
    display:'flex',
    justifyContent:'end',
    marginTop:'15px',
    paddingBottom:'20px'
};
const totalPrice = {
    display:'flex',
    // border:'1px solid',
    fontSize:'20px',
    fontWeight:'600',
    paddingRight:'15px'
};
const totalText = {
    display:'flex',
    // border:'1px solid',
    fontSize:'20px',
    fontWeight:'400',
    paddingRight:'15px'
};
const quantityContainer = {
    display:'flex',
    paddingTop:'10px',
    // border:'1px solid',
    width:'100%',
};
const quantity = {
    marginRight:'5px',
};
const quantityInput = {
    width:'20px',
    border:'1px solid',
    textAlign:'center',
    marginRight:'10px',
};
const proceedToCheckoutContainer = {
    display:'flex',
    justifyContent:'start',
    width:'50%',
    // border:'1px solid',
    textAlign:'center',
    marginRight:'10px',
};
const checkoutButton = {
    padding:'5px 50px 5px 50px',
    border:'1px solid',
    borderColor:'#a18f14',
    backgroundColor:'#f4d608',
    borderRadius:'10px',
    fontWeight:'600',
    // boxShadow:'2px 2px 2px 2px rgba(200, 200, 200, .3)'
};

function Cart(props){
    const reduxCart = useSelector(state => state.cart);
    
    return (
        <div>
        {/* <div style={backgroundColor}></div> */}
        <div style={container}>
            <div style={innerContainer}>
                <SideBarCategories/>
                <div style={productContainer}>
                    <div style={cartTitle}>Shopping Cart</div>

                    {/* INDIVIDUAL PRODUCT START*/}
                    {reduxCart.items.map((author, index) => (
                    <div style={productInfoContainer}>
                        <div style={checkBoxContainer}>
                            <input type="checkbox" checked/>
                        </div>
                        <div style={imageContainer}>
                            <div style={imageWrapper}>
                                <div>IMAGE</div>
                                <img src="C:/Users/lwiltshire/Desktop/AWS/book-store/src/image/book1.png" />
                            </div>
                        </div>
                        <div style={descriptionContainer}>
                            <div style={productTitle}>{author.title.toUpperCase()}</div>
                            <div style={publicationContainer}>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>By: </div>
                                    <div style={value}>  {author.by.toUpperCase()}</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Publication Date: </div>
                                    <div style={value}>{author.publicationDate}</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Format: </div>
                                    <div style={value}>{author.format}</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Category: </div>
                                    <div style={value}>{author.category}</div>
                                </div>
                                <div style={quantityContainer}>
                                    <div style={quantity}>Qty: </div>
                                    <input style={quantityInput} type='text'/>
                                    <DeleteIcon sx={{ fontSize:20, color:'#e63b3b' }} />
                                </div>
                            </div>
                        </div>
                        <div style={priceContainer}><div style={price}>${author.price}</div></div>
                    </div>
                    ))}
                    {/* INDIVIDUAL PRODUCT END */}

                    <div style={cartTotalContainer}>
                        <div style={proceedToCheckoutContainer}>
                            <button style={checkoutButton}>Proceed to checkout</button>
                        </div>
                        <div style={totalText}>Total:</div>
                        <div style={totalPrice}></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Cart;
