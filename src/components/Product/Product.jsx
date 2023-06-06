import * as React from 'react';
import SideBarCategories from './SideBarCategories';
import '../../css/Product.css';

const stockImage = process.env.REACT_APP_STOCK;

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
    justifyContent:'center',
    width:'80%',
    // border:'1px solid silver',
    borderTop:'1px solid silver',
    marginLeft:'15px',
};
const categoryName = {
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
    // border:'1px solid green',
    width:'100%',
    // fontFamily:'Arial, sans-serif'
};
const imageContainer = {
    display:'flex',
    justifyContent:'center',
    // border:'1px solid green',
    width:'30%',
    margin:'0px 15px 0px 15px'
};
const imageWrapper = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border:'1px solid green',
    height:'40%',
    width:'100%'
    // fontFamily:'Arial, sans-serif'
};
const imageFile = {
    dispay:'flex',
    // border:'1px solid green',
    height:'60%',
    // width:'70%',
    // fontFamily:'Arial, sans-serif'
};
const productDetailsContainer = {
    display:'flex',
    flexDirection:'column',
    // border:'1px solid green',
    width:'70%'
    // fontFamily:'Arial, sans-serif'
};
const bookTitle = {
    display:'flex',
    // border:'1px solid',
    width:'90%',
    fontWeight:'600',
    // color:'#bf9000',
    padding:'15px 0px 15px 0px'
};
const publicationContainer = {
    display:'flex',
    flexDirection:'column',
    // border:'1px solid',
    width:'100%',
};
const keyValuePairContainer = {
    display:'flex',
    // border:'1px solid',
    width:'100%',
};
const key = {
    display:'flex',
    // border:'1px solid',
    width:'30%',
    fontWeight:'500',
};
const value = {
    display:'flex',
    // border:'1px solid',
    width:'70%',
    color:'#807878'
};
const productDetails = {
    display:'flex',
    // border:'1px solid',
    width:'90%',
    padding: '15px 0px 30px 0px'
};
const price = {
    display:'flex',
    // border:'1px solid',
    borderBottom:'1px solid silver',
    width:'100%',
    fontSize:'30px',
    fontWeight:'600',
    padding: '10px 0px 15px 0px'
};
const quantityAddContainer = {
    display:'flex',
    // border:'1px solid',
    width:'100%',
    padding: '10px 0px 15px 0px'

};
const cartButton = {
    // width:'20%',
    border:'none',
    color:'white',
    backgroundColor:'#2c844f',
    border:'2px solid green',
    // borderRadius:'20px',
    // wordSpacing:'3px'
};
function Product(props){
    
    return (
        <div>
        {/* <div style={backgroundColor}></div> */}
        <div style={container}>
            <div style={innerContainer}>
                <SideBarCategories/>
                <div style={productContainer}>
                    <div style={categoryName}>Category Name</div>
                    <div style={productInfoContainer}>
                        <div style={imageContainer}>
                            <div style={imageWrapper}>
                                <img style={imageFile} src={stockImage}/>                      </div>
                        </div>
                        <div style={productDetailsContainer}>
                            <div style={bookTitle}>ARTISTRY OF FLOWERS: FLORAL DESIGN BY LA MUSA DE LAS FLORES (SIGNED)</div>
                            <div style={publicationContainer}>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>By: </div>
                                    <div style={value}>  MARÍA GABRIELA SALAZAR</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Publication Date: </div>
                                    <div style={value}>March 14, 2023</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Format: </div>
                                    <div style={value}>Hardcover</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Trim Size: </div>
                                    <div style={value}>11.2in. x 8.6in. x 1in.</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>ISBN: </div>
                                    <div style={value}>9780847899081</div>
                                </div>
                                <div style={keyValuePairContainer}>
                                    <div style={key}>Category: </div>
                                    <div style={value}>DIY</div>
                                </div>
                            </div>
                            <div style={productDetails}>
                            About This Item:  Bring beauty in the form of nature into your home and your lifestyle, no matter where you live, through artful floral arrangements, as well as indoor and outdoor flowering plants. The Artistry of Flowers encourages everyone to live with florals and to appreciate their beauty as we appreciate art. Celebrated floral designer Gabriela Salazar teaches us how to look at flowers and understand their characteristics from an artist's perspective. By exploring different shapes, colors, and textures, she shows us how to understand flowers and their living, transitory nature. Drawing on her painting background, Salazar looks at floral arrangements as compositions. She highlights which type of blooms are best for different designs and shares building blocks for floral designs ranging from simple and sculptural to complex and colorful, including arrangements for any mood and different decor. Salazar inspires us to explore our creativity, empowering us to design our own arrangements. Combining philosophical and practical tips, such as appreciating how flowers change over time and working with fragility The Artistry of Flowers is a treatise on flower appreciation. The stunning photography by Ngoc Minh Ngo--known for Rizzoli books such as In Bloom and Eden Revisited--complements Salazar's enthusiastic instruction.
                            </div>
                            <div style={price}>$29.95</div>
                            <div style={quantityAddContainer}>
                                <div><input style={{width:'40px',marginRight:'20px'}} type="text" placeholder='QTY'/></div>
                                <div><button style={cartButton}>ADD TO CART</button></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}
export default Product;
