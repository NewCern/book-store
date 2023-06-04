import * as React from 'react';
import './SplashImage.css';
// import styled from 'styled-components';

const container = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    borderTop:'2px solid black',
    borderBottom:'2px solid black',
    height:'48%',
    fontFamily:'Arial, sans-serif',
    backgroundColor:'#728991'
};
const text = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    width:'30%',
    minWidth:'410px',
    fontSize:'20px',
    // border:'1px solid green',
    fontWeight:'400',
    lineHeight:'1.5',
    color:'white',
    height:'70%',
    minHeight:'210px'
};
const arrowBackgroundStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f90505',
    width:'40px',
    height:'40px',
    borderRadius:'50px',
    // border:'2px solid',
}

function SplashImage(props){
    
    return (
        <div style={container}>
            <div style={text}>
                <div style={{textDecoration:'underline'}}>
                    Discover a world       
                </div>
                <div style={{textDecoration:'underline'}}>
                    of literary wonders today    
                </div>
                <div style={{fontSize:'12px',paddingTop:'20px'}}>
                    Great deals inside      
                </div>
                <div style={{fontSize:'12px',paddingBottom:'10px'}}>
                    Science Fiction, History, and more    
                </div>
                <div style={arrowBackgroundStyle}>
                    <div className='downward-arrow'></div>
                </div>
            </div>
        </div>
    );
}
export default SplashImage;