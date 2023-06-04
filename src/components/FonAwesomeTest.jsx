import * as React from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const container = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    // borderTop:'2px solid black',
    borderBottom:'2px solid black',
    height:'40%',
    fontFamily:'Arial, sans-serif',
    backgroundColor:'#728991'
};

function fontawesomeTest(props){

// Specify all properties: name, family, style
icon({name: 'user', family: 'classic', style: 'solid'})
icon({name: 'user', family: 'classic', style: 'regular'})
icon({name: 'twitter', family: 'classic', style: 'brands'})

// 'classic' is the default family, you can leave that off
icon({name: 'user', style: 'solid'})
icon({name: 'user', style: 'regular'})
icon({name: 'twitter', style: 'brands'})

// 'solid' is the default style, you can leave that off
icon({name: 'user'})
    
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
export default fontawesomeTest;