import * as React from 'react';
import SideBarCategories from './SideBarCategories';
import { authors } from '../../../database/authors';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';

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
    width:'25%',
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
const addToCartContainer = {
    display:'flex',
    justifyContent:'end',
    alignItems:'center',
    // border:'1px solid green',
    fontSize:'20px',
    marginTop:'15px',
    marginRight:'15px'
};


function SearchResults(props){
    const reduxSearch = useSelector(state => state.search);
    const reduxCart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        console.log(reduxCart)
    };

    return (
        <div>
        {/* <div style={backgroundColor}></div> */}
        <div style={container}>
            <div style={innerContainer}>
                <SideBarCategories/>
                <div style={productContainer}>
                    <div style={cartTitle}>{reduxSearch.keyword}</div>

                    {/* INDIVIDUAL PRODUCT START*/}
                    {reduxSearch.results.map((book, index) => (
                    <div key={index} style={productInfoContainer}>
                        <div style={imageContainer}>
                            <div style={imageWrapper}>
                                <div>IMAGE</div>
                                <img src="C:/Users/lwiltshire/Desktop/AWS/book-store/src/image/book1.png" />
                            </div>
                        </div>
                        <div style={descriptionContainer}>
                            <div style={productTitle}>{book.title.toUpperCase()}</div>
                            <div style={publicationContainer}>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>By: </div>
                                    <div style={value}>  {book.by.toUpperCase()}</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Publication Date: </div>
                                    <div style={value}>{book.publicationDate}</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Format: </div>
                                    <div style={value}>{book.format}</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Category: </div>
                                    <div style={value}>{book.category}</div>
                                </div>
                            </div>
                        </div>
                        <div style={priceContainer}>
                            <div style={price}>${book.price}</div>
                            <div style={addToCartContainer}>
                                <AddShoppingCartIcon 
                                    sx={{ fontSize:25, color:'#718966', marginRight:'15px' }}
                                    onClick={(e) => handleAddToCart(book)}
                                    />
                                <RemoveShoppingCartIcon sx={{ fontSize:25, color:'#e63b3b' }} />
                                {/* <DeleteIcon sx={{ fontSize:30, color:'#e63b3b' }} /> */}
                            </div>
                        </div>
                    </div>
                    ))}
                    {/* INDIVIDUAL PRODUCT END */}

                </div>
            </div>
        </div>
        </div>
    );
}
export default SearchResults;
