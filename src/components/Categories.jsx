import * as React from 'react';

const container = {
    display:'flex',
    flexDirection:'column',
    width:'100%',
    border:'1px solid green',
    height:'38%',
};
const categoryHeaderContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    border:'1px solid green',
    height:'20%',
};
const buttonsContainer = {
    display:'flex',
    width:'100%',
    border:'1px solid green',
    height:'80%',
};
const buttonOuterContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'20%',
    border:'1px solid green',
    height:'100%',
};
const buttonInnerContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    width:'70%',
    // border:'1px solid green',
    height:'60%',
};

function Categories(props){
    
    return (
        <div style={container}>
            <div style={categoryHeaderContainer}>CATEGORIES</div>
            <div style={buttonsContainer}>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <div>ICON</div>
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button>Fiction</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <div>ICON</div>
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button>Non-Fiction</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <div>ICON</div>
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button>History</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <div>ICON</div>
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button>Science</button>
                    </div>
                </div>
                <div style={buttonOuterContainer}>
                    <div style={buttonInnerContainer}>
                        <div>ICON</div>
                        <p style={{textAlign:'center'}}>Options from Today's Best Sellers</p>
                        <button>Hobby</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Categories;