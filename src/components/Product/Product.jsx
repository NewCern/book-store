import * as React from 'react';
import SideBarCategories from './SideBarCategories';
import '../../css/Product.css';

const container = {
    display:'flex',
    justifyContent:'center',
    width:'100%',
    // border:'1px solid green',
    fontFamily:'Arial, sans-serif',
    marginTop:'40px'
};
const innerContainer = {
    display:'flex',
    justifyContent:'center',
    width:'80%',
    // border:'1px solid green',
    maxWidth:'1500px',
    // fontFamily:'Arial, sans-serif'
};
const productContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width:'80%',
    // border:'1px solid green',
    // fontFamily:'Arial, sans-serif'
};
const categoryName = {
    display:'flex',
    justifyContent:'start',
    // border:'1px solid green',
    borderBottom:'1px solid silver',
    fontSize:'20px',
    fontWeight:'600',
    margin:'0px 0px 15px 15px'
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
    width:'100%',
    fontWeight:'900',
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
    fontWeight:'600',
};
const value = {
    display:'flex',
    // border:'1px solid',
    width:'70%',
};
const productDetails = {
    display:'flex',
    // border:'1px solid',
    width:'100%',
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
        <div style={container}>
            <div style={innerContainer}>
                {/* <SideBarCategories/> */}
                <div style={productContainer}>
                    <div style={categoryName}>Category Name</div>
                    <div style={productInfoContainer}>
                        <div style={imageContainer}>
                            <div style={imageWrapper}>
                                <img style={imageFile} src="https://book-store-lnz.s3.us-east-1.amazonaws.com/book1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCLs2PrLnCXE12d8g8spP1lHv39wNoCzaeGc48w92o%2B%2BwIgVo2GKqeuSINzL4AtRljzWF9CTb8Lgr4L5QZQlEJTYmgq5AIINBABGgwyMzM3ODQzNTA5MDUiDHmFLbo72am62uUePirBAoSrCtqwRo7JHTdAsQyAZT1WDjmBAcVYqpZOtb5XhAvLOe80ZzsZ%2BgZIdW4e59HL8mCYVNFvMq7XZiTXePnHTNhPjL1Uw4NROjmqc4EGyRhL%2BszVDnWDRum1BiePVO1kysXpp0YNAKodvIwhlHtyLwW7lfqtRkM7kCveQZNXZVIQz6yXkN3ob5WJ5yOMdvjVQohWNODlI41fVppJOr1mq2%2FEVyhL3%2BfC%2Bzu0XBJS3kOYtH10OmIqLP%2B9JyA5Y0zLmUWRV%2F1msnBrBpG%2F%2BtE%2FrnnHdP%2FmHiXvnH2UOxJ0y3h2Y7pPwtNtH9cCWZA9t3ivDPNHgHAE%2BHnyzmN8SNq%2FWiLFcYoUUE5l3qyDSt8kPTSNvdiObIc2IlGQQjIruS1G%2FcowgTudzWqZCvay4aAcgwXGnElYd5FOu7NRKiXxNNH7wDDI5vijBjqzAhHbM6cH%2BgfceF4EUr%2FMY%2B2ZzGuWgSR2NYxJwuR%2BIQHO6xZLutfSshryKTq3%2FvUPEIbk7Cj98hI44xdFyPgT6FmT2E9VGAy6GCS71SUKlnf83E%2F4DtqJHSjVELkDNeo6y38ITgm8tBJ6V7pYK4C91pWsYLVQaB%2BoUfsKHQt2W6Qp%2F6WIWC3hfdZ32he4%2BGlL7fG%2FT%2FZ5DWR%2BJMpNo%2FDjvv5C3juM59J%2B0%2BdpI5Wg5IOv0bll85W7Wh6taZIqSYkrZ2dpWFPuRB%2F45pePL5tKosq5PvwMwgVTyU6E7KtybesSfpIu%2F3LB%2Fgh41mrT%2Bg4BBu%2Fc3oATGPQAtAwLzXOGddvI9ZOOdwb6Kh6yF154XfrtMY01dkD%2BBeYIUvK8svc7kF8weYtdT%2FcZ2yOg9o%2BA0Ty%2BAME%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230605T191848Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATM3VCDC4WGZ4VU5Z%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c52b552f4ae9dcb552da940934a636af85dd7a0a3b9e9110a1e7327ec72af422" />
                            </div>
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
    );
}
export default Product;
