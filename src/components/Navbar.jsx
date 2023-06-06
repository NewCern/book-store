import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const container = {
    display:'flex',
    width:'100%',
    border:'1px solid silver',
    height:'55px',
    fontFamily:'Arial, sans-serif',
    boxShadow:'2px 2px 2px rgba(200, 200, 200, .5)'
};
const logoContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'15%',
    fontSize:'20px',
    // border:'1px solid',
    fontWeight:'900',
    color:'#2c844f',
};
const searchContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'55%',
    // border:'1px solid'
};
const searchInputStyle = {
    marginRight:'15px',
    width:'50%'
};
const searchButtonStyle = {
    width:'20%',
    border:'none',
    color:'white',
    backgroundColor:'#2c844f',
    border:'2px solid green',
    borderRadius:'20px',
    wordSpacing:'3px'
};
const homeContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    color:'#2c844f',
    fontWeight:'600',
    // border:'1px solid'
};
const loginContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    color:'#2c844f',
    fontWeight:'600',
    // border:'1px solid'
};
const adminContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    color:'#2c844f',
    fontWeight:'600',
    // border:'1px solid'
};
const cartContainer = {
    display:'flex',
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    color:'#2c844f',
    fontWeight:'600',
    // border:'1px solid'
};
const cartCountLayer = {
    display:'flex',
    position:'absolute',
    top:'26%',
    left:'48%',
    justifyContent:'center',
    alignItems:'start',
    // width:'10%',
    color:'white',
    fontSize:'13px',
    // fontWeight:'600',
    // border:'1px solid'
};

function Navbar(props){
    
    return (
        <div style={container}>
            <div style={logoContainer}>Lonas</div>
            <div style={searchContainer}>
                <input style={searchInputStyle} type="text"/>
                <button style={searchButtonStyle}>Search</button>
            </div>
            <div style={homeContainer}>home</div>
            <div style={loginContainer}>login</div>
            {/* <div style={adminContainer}>admin</div> */}
            <div style={cartContainer}>
                    <ShoppingCartIcon sx={{ fontSize:40, color:'#2c844f' }} />
                    <div style={cartCountLayer}>0</div>
            </div>
        </div>
    );
}
export default Navbar;
