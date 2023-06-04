import * as React from 'react';
import FortIcon from '@mui/icons-material/Fort';
import BuildIcon from '@mui/icons-material/Build';
import ScienceIcon from '@mui/icons-material/Science';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'

const container = {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    fontFamily:'Arial, sans-serif',
    color:'#2c844f',
    // border:'1px solid green',
    height:'40%',
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
const categoryTitle = {
    fontWeight:'600',
    textAlign:'center',
    fontSize:'13px',
};
const buttonStyle = {
    // width:'20%',
    border:'none',
    color:'white',
    backgroundColor:'#6c796c',
    fontSize:'12px',
    border:'1px solid silver',
    padding:'10px',
    borderRadius:'5px',
    // boxShadow:'2px 2px 2px rgba(10, 10, 10, .5)'
};

function Categories(props){
    const dragonIcon = <FontAwesomeIcon icon={faDragon} color="#e18a03" size="2x" />;
    
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
                        <div>{dragonIcon}</div>
                        <span style={categoryTitle}>Fictional Books</span>
                        <span className='categoryDescription'>Romance novels, action adventure, etc</span>
                        <button style={buttonStyle}>Fiction</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <ScienceIcon sx={{ fontSize:40, color:'#e18a03' }} />
                        <span style={categoryTitle}>Scientific Books</span>
                        <span className='categoryDescription'>Romance novels, action adventure, etc</span>
                        <button style={buttonStyle}>Science</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        {/* <div>ICON</div> */}
                        <FortIcon sx={{ fontSize:40, color:'#e18a03' }} />
                        <span style={categoryTitle}>History Books</span>
                        <span className='categoryDescription'>Romance novels, action adventure, etc</span>
                        <button style={buttonStyle}>History</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <MiscellaneousServicesIcon sx={{ fontSize:40, color:'#e18a03' }} />
                        <span style={categoryTitle}>Engineering Books</span>
                        <span className='categoryDescription'>Romance novels, action adventure, etc</span>
                        <button style={buttonStyle}>Engineer</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <BuildIcon sx={{ fontSize:40, color:'#e18a03' }} />
                        <span style={categoryTitle}>DIY Books</span>
                        <span className='categoryDescription'>Romance novels, action adventure, etc</span>
                        <button style={buttonStyle}>DIY</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Categories;