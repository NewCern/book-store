import * as React from 'react';

const container = {
    display:'flex',
    justifyContent:'center',
    width:'100%',
    border:'1px solid green',
    height:'6%',
};
const textContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    border:'1px solid green',
    height:'100%',
};

function Footer(props){
    
    return (
        <div style={container}>
            <div style={textContainer}>Footer</div>
        </div>
    );
}
export default Footer;