import * as React from 'react';
import FortIcon from '@mui/icons-material/Fort';
import BuildIcon from '@mui/icons-material/Build';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
// import library from '@fortawesome/fontawesome-svg-core';
// import { dragon } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const container = {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    fontFamily:'Arial, sans-serif',
    color:'#2c844f',
    // border:'1px solid green',
    height:'46%',
};
const categoryHeaderContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    // border:'1px solid green',
    height:'20%',
};
const buttonsContainer = {
    display:'flex',
    width:'100%',
    // border:'1px solid green',
    height:'80%',
};
const buttonOuterContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'20%',
    borderLeft:'2px solid',
    borderColor:'#d9deec',
    height:'100%',
    backgroundColor:'#edeff6'
};
const buttonInnerContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    width:'70%',
    // border:'1px solid green',
    height:'80%',
};
const buttonStyle = {
    // width:'20%',
    border:'none',
    color:'white',
    backgroundColor:'#858ca1',
    fontSize:'12px',
    border:'1px solid silver',
    padding:'10px',
    borderRadius:'5px',
    // boxShadow:'2px 2px 2px rgba(10, 10, 10, .5)'
};

function Categories(props){
    
    
    return (
        <div style={container}>
            <div style={categoryHeaderContainer}>
                <div style={{fontWeight:'900',fontSize:'15px'}}>
                    Embark on literary adventures across genres and themes in our book categories.
                </div>
                {/* <div>Categories</div> */}
            </div>
            <div style={buttonsContainer}>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        {/* <div>ICON</div> */}
                        {/* <svg data-testid="DeleteIcon" ></svg> */}
                        {/* <DeleteIcon /> */}
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button style={buttonStyle}>Fiction</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <div>ICON</div>
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button style={buttonStyle}>Non-Fiction</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        {/* <div>ICON</div> */}
                        <FortIcon sx={{ fontSize:40, color:'#f90505' }} />
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button style={buttonStyle}>History</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <MiscellaneousServicesIcon sx={{ fontSize:40, color:'#f90505' }} />
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button style={buttonStyle}>Engineer</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <BuildIcon sx={{ fontSize:40, color:'#f90505' }} />
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button style={buttonStyle}>DIY</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Categories;