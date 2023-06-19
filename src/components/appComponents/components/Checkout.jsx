import * as React from 'react';
import SideBarCategories from './SideBarCategories';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, updateTotal } from '../../../store/cartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { store } from '../../../store/store';
import '../../../css/checkout.css';
import visaCard from '../../../image/visaCard.svg';
import masterCard from '../../../image/masterCard.svg';
import amexCard from '../../../image/amexCard.svg';
import discoverCard from '../../../image/discoverCard.svg';
import paypalWord from '../../../image/paypalWord.png';
import paypalP from '../../../image/paypalP.png';
import axios from 'axios';


function Checkout(props){
    const UPDATE_CUSTOMER = process.env.REACT_APP_UPDATE_CUSTOMER;
    let creditCardInput = React.useRef(null);
    let paypalInput = React.useRef(null);
    const reduxCart = useSelector(state => state.cart);
    const reduxCustomer = useSelector(state => state.login);
    const dispatch = useDispatch();
    const [ input, setInput ] = React.useState({
        ...reduxCustomer,
    });
    const [ creditCardRowContainer, setcreditCardRowContainer ] = React.useState({
        display:"none",
        /* border:1px solid; */
        width:"100%",
    })
    const [ inputName, setInputName ] = React.useState({
        width:"50%",
        fontSize:"11px",
        padding:'7px',
        marginTop:"5px",
        // border:'1px solid',
        display:'none',
    })
    const [ customerName, setCustomerName ] = React.useState({
        width:"50%",
        fontSize:"11px",
        padding:'9px',
        marginTop:"5px",
        // backgroundColor:'white',
        // border:'1px solid',
    })
    const [ inputAreaCode, setInputAreaCode ] = React.useState({
        width:"10%",
        fontSize:"11px",
        padding:'7px',
        marginTop:"5px",
        // backgroundColor:'white',
        // border:'1px solid',
        display:'none',
        marginBottom:'15px',
    })
    const [ customerAreaCode, setCustomerAreaCode ] = React.useState({
        width:"10%",
        fontSize:"11px",
        padding:'9px',
        marginTop:"5px",
        // backgroundColor:'white',
        marginBottom:'15px',
        // border:'1px solid',
    })
    const [ inputPhone, setInputPhone ] = React.useState({
        width:"90%",
        fontSize:"11px",
        padding:'7px',
        marginTop:"5px",
        // backgroundColor:'white',
        // border:'1px solid',
        display:'none',
        marginBottom:'15px',
    })
    const [ customerPhone, setCustomerPhone ] = React.useState({
        width:"90%",
        fontSize:"11px",
        padding:'9px',
        marginTop:"5px",
        // backgroundColor:'white',
        marginBottom:'15px',
        // border:'1px solid',
    })
    const [ inputEmail, setInputEmail ] = React.useState({
        width:"100%",
        fontSize:"11px",
        padding:'7px',
        marginTop:"5px",
        /* border:1px solid; */
        display:'none',
    })
    const [ customerEmail, setCustomerEmail ] = React.useState({
        width:"100%",
        fontSize:"11px",
        padding:'9px',
        marginTop:"5px",
        // backgroundColor:'white',
        // border:'1px solid',
    })
    const [ paypalRowContainer, setPaypalRowContainer ] = React.useState({
        display:"none",
        // border:"1px solid",
        width:"100%",
    })
    const [ paypalRowAgreementContainer, setPaypalRowAgreementContainer ] = React.useState({
        display:"none",
        // border:"1px solid",
        width:"100%",
        marginTop:'20px',
    })
    const [ paypalAreementCheckbox, setPaypalAgreementCheckbox ] = React.useState({
        display:"flex",
        alignItems:'start',
        // border:"1px solid",
        marginRight:'5px',
    })
    const [ paypalAreement, setPaypalAgreement ] = React.useState({
        display:"flex",
        // border:"1px solid",
        fontSize:'11px',
        marginTop:'5px',
        marginBottom:'25px',
    })
    const [ paypalRadioContainer, setPaypalRadioContainer ] = React.useState({
        display:"flex",
        justifyContent:"space-between",
        // border:"1px solid",
        alignItems:"center",
        fontSize:'11px',
        padding:'7px 0px 7px 0px',
        marginBottom:'20px',
    })
    const [ creditCardRadioContainer, setCreditCardRadioContainer ] = React.useState({
        display:"flex",
        justifyContent:"space-between",
        // border:"1px solid",
        alignItems:"center",
        fontSize:'11px',
        padding:'7px 0px 7px 0px',
        marginTop:'20px',
        marginBottom:'20px',
    })
    const [ checkoutProcessCreditButton, setCheckoutProcessCreditButton ] = React.useState({
        padding:"12px 25px 12px 25px",
        marginRight:"10px",
        color:'white',
        fontSize:"11px",
        backgroundColor:"rgba(68, 148, 68)",
        borderRadius:"13px",
        border:"none",
        display:"none",
    })
    const [ checkoutProcessPaypalButton, setCheckoutProcessPaypalButton ] = React.useState({
        padding:"10px 25px 10px 25px",
        marginRight:"10px",
        color:'black',
        fontSize:"11px",
        backgroundColor:"white",
        borderRadius:"13px",
        border:"1px solid black",
        display:"none",
    })
    const [ checkoutCancelButton, setCheckoutCancelButton ] = React.useState({
        padding:"10px 25px 10px 25px",
        marginRight:"10px",
        color:'white',
        fontSize:"11px",
        backgroundColor:"black",
        borderRadius:"13px",
        // border:"1px solid black",
        // display:"none",
    })
    const [ editShippingButton, setEditShippingButton ] = React.useState({
        padding:"10px 25px 10px 25px",
        marginRight:"10px",
        color:'white',
        fontSize:"11px",
        backgroundColor:"rgb(99, 108, 186)",
        borderRadius:"13px",
        border:"none",
        padding:"12px"
        // border:"1px solid black",
        // display:"none",
    })
    const [ updateShippingButton, setUpdateShippingButton ] = React.useState({
        padding:"10px 25px 10px 25px",
        marginRight:"10px",
        color:'white',
        fontSize:"11px",
        backgroundColor:"rgba(68, 148, 68)",
        borderRadius:"13px",
        border:"none",
        padding:"12px",
        // border:"1px solid black",
        display:"none",
    })
    const [ paymentInfoContainer, setPaymentInfoContainer ] = React.useState({
        position:"relative",
        display:"flex",
        flexDirection:"column",
        border:"1px solid",
        borderLeft:"none",
        width:'50%',
    })
    const [ opacityLayer, setOpacityLayer ] = React.useState({
        top:"0px",
        left:"0px",
        // border:"3px solid",
        borderLeft:"none",
        width:'100%',
        height:'100%',
        opacity:'.8',
        backgroundColor:'white',
        zIndex:'100',
        display:'none',
    })
    const [ updatePrompt, setUpdatePrompt ] = React.useState({
        fontSize:"11px",
        color:"red",
        marginBottom:'15px',
        display:'none',
        
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    }

    const choosePayment = (event) => {
        const current = event.target;
        if(current.value === "creditCard"){
            setPaypalRowContainer({
                ...creditCardRowContainer,
                display: 'none',
            });
            setPaypalRowAgreementContainer({
                ...paypalRowAgreementContainer,
                display: 'none',
            });
            setcreditCardRowContainer({
                ...creditCardRowContainer,
                display: 'flex',
            });
            setCreditCardRadioContainer({
                ...creditCardRadioContainer,
                border: '2px solid silver',
            });
            setPaypalRadioContainer({
                ...paypalRadioContainer,
                border: 'none',
            });
            setCheckoutProcessPaypalButton({
                ...checkoutProcessPaypalButton,
                display: 'none',
            });
            setCheckoutProcessCreditButton({
                ...checkoutProcessCreditButton,
                display: 'block',
            });
        }

        if(current.value === 'paypal'){
            setPaypalRowContainer({
                ...creditCardRowContainer,
                display: 'flex',
            });
            setPaypalRowAgreementContainer({
                ...paypalRowAgreementContainer,
                display: 'flex',
            });
            setPaypalRadioContainer({
                ...paypalRadioContainer,
                border: '2px solid silver',
            });
            setcreditCardRowContainer({
                ...creditCardRowContainer,
                display: 'none',
            });
            setCreditCardRadioContainer({
                ...creditCardRadioContainer,
                border: 'none',
            });
            setCheckoutProcessPaypalButton({
                ...checkoutProcessPaypalButton,
                display: 'block',
            });
            setCheckoutProcessCreditButton({
                ...checkoutProcessCreditButton,
                display: 'none',
            });
        }
    }

    const editShippingDetails = () => {
        setUpdateShippingButton({
            ...updateShippingButton,
            display:"block",
        });
        setEditShippingButton({
            ...editShippingButton,
            display:"none",
        });
        setCustomerName({
            ...customerName,
            display:"none",
        });
        setInputName({
            ...inputName,
            display:"block",
        });
        setCustomerEmail({
            ...customerEmail,
            display:"none",
        });
        setInputEmail({
            ...inputEmail,
            display:"block",
        });
        setCustomerAreaCode({
            ...customerAreaCode,
            display:"none",
        });
        setInputAreaCode({
            ...inputAreaCode,
            display:"block",
        });
        setInputPhone({
            ...inputPhone,
            display:"block",
        });
        setCustomerPhone({
            ...customerPhone,
            display:"none",
        });
        setOpacityLayer({
            ...opacityLayer,
            display:"block",
        });
        setUpdatePrompt({
            ...updatePrompt,
            display:"block",
        });
    };

    const saveUpdatedShippingDetails = async() => {
        try{
            await axios.post(UPDATE_CUSTOMER, {
                ...input,
                emailAddressUpperCase: input.emailAddress.toUpperCase(),
                firstNameUpperCase: input.firstName.toUpperCase(),
                lastNameUpperCase: input.lastName.toUpperCase(),
                addressUpperCase: input.address.toUpperCase(),
                aptUpperCase: input.apt.toUpperCase(),
                cityUpperCase: input.city.toUpperCase(),
                stateUpperCase: input.state.toUpperCase(),
            })
            .then(res => {
                const customer = JSON.parse(res.data.rest.body);
                console.log("Response from checkout: ", customer);
            });
            
            setUpdateShippingButton({
                ...updateShippingButton,
                display:"none",
            });
            setEditShippingButton({
                ...editShippingButton,
                display:"block",
            });
            setInputName({
                ...inputName,
                display:"none",
            });
            setCustomerName({
                ...customerName,
                display:"block",
            });
            setCustomerEmail({
                ...customerEmail,
                display:"block",
            });
            setInputEmail({
                ...inputEmail,
                display:"none",
            });
            setCustomerAreaCode({
                ...customerAreaCode,
                display:"block",
            });
            setInputAreaCode({
                ...inputAreaCode,
                display:"none",
            });
            setCustomerPhone({
                ...customerPhone,
                display:"block",
            });
            setInputPhone({
                ...inputPhone,
                display:"none",
            });
            setOpacityLayer({
                ...opacityLayer,
                display:"none",
            });
            setUpdatePrompt({
                ...updatePrompt,
                display:"none",
            });
        } catch(error){
            console.log(error)
        }
    };

    React.useEffect(() => {
        console.log("From use effect in Checkout component: ");
        // console.log(reduxCustomer);
        console.log(input);


    }, [input]);
    
    return (
        <div>
        <div className='container-checkout'>
            <div className='inner-container-checkout'>
                <div className='customer-info-payment-container'>
                <div className='infoContainer'>
                    <div className='billing-shipping-info-header'>billing/shipping information</div>
                    <div className='customer-address-container'>
                        <div className='inner-customer-address-container'>
                            <div className='conditions-of-use'>must be the same as your credit card address</div>
                            <div className='address-row-container'>
                                <span style={customerName}>{input.firstName}</span>
                                <span style={customerName}>{input.lastName}</span>
                                <input style={inputName} name="firstName" placeholder='first name' value={input.firstName} onChange={handleChange}/>
                                <input style={inputName} name="lastName" placeholder='last name' value={input.lastName} onChange={handleChange}/>
                            </div>
                            <div className='address-row-container'>
                                <span style={customerEmail}>{input.emailAddress}</span>
                                <input style={inputEmail} placeholder='email' name="emailAddress" value={input.emailAddress} onChange={handleChange} />
                            </div>
                            <div className='address-row-container'>
                                <span style={customerEmail}>{input.address}</span>
                                <input style={inputEmail} placeholder='address' name="address" value={input.address} onChange={handleChange} />
                            </div>
                            <div className='address-row-container'>
                                <span style={customerEmail}>{input.apt}</span>
                                <input style={inputEmail} placeholder='apt, unit, etc. (optional)' name="apt" value={input.apt} onChange={handleChange} />
                            </div>
                            <div className='address-row-container'>
                                <span style={customerName}>{input.city}</span>
                                <span style={customerName}>{input.zip}</span>
                                <input style={inputName} placeholder='city' name="city" value={input.city} onChange={handleChange} />
                                <input style={inputName} placeholder='zip code' name="zip" value={input.zip} onChange={handleChange} />
                            </div>
                            <div className='address-row-container'>
                                <span style={customerEmail}>{input.state}</span>
                                <input style={inputEmail} placeholder='state' name="state" value={input.state} onChange={handleChange} />
                            </div>
                            <div className='address-row-container'>
                                <span style={customerAreaCode}>{input.areaCode}</span>
                                <span style={customerPhone}>{input.phoneNumber}</span>
                                <input style={inputAreaCode} placeholder='phone' name="areaCode" value={input.areaCode} onChange={handleChange}/>
                                <input style={inputPhone} placeholder='phone' name="phone" value={input.phoneNumber} onChange={handleChange}/>
                            </div>
                            <div className='address-row-container'>
                                <span style={updatePrompt}> SAVE or CANCEL before proceeding</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='paymentInfoContainer'>
                    {/* <div style={opacityLayer}></div> */}
                    <div className='paymentInfoInnerContainer'>
                    
                    <div className='payment-info-header'>credit card information</div>
                    <div className='credit-card-container'>
                        <div className='inner-credit-card-container'>
                            <div style={creditCardRadioContainer}>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <input style={{height:'100%', padding:'0px'}} ref={creditCardInput}  name="paymentType" type='radio' value="creditCard" onClick={choosePayment}/>
                                <label htmlFor="credit card">credit card</label>
                                </div>
                                <div style={{marginRight:'5px'}}>
                                    <img src={visaCard}/>
                                    <img src={amexCard}/>
                                    <img src={discoverCard}/>
                                    <img src={masterCard}/>
                                </div>
                            </div>
                            <div className='credit-card-row' style={creditCardRowContainer}>
                                <input className='email-input' placeholder='card number' />
                            </div>
                            <div className='credit-card-row' style={creditCardRowContainer}>
                                <input className='email-input' placeholder='name on card' />
                            </div>
                            <div className='credit-card-row' style={creditCardRowContainer}>
                                <input className='name-input' placeholder='expiration date'/>
                                <input className='name-input' placeholder='security code'/>
                            </div>
                        </div>
                        <div className='inner-paypal-container'>
                            <div style={paypalRadioContainer}>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <input style={{height:'100%', padding:'0px'}} ref={paypalInput} name='paymentType' type='radio' value="paypal" onClick={choosePayment} />
                                    <label htmlFor="paypal">paypal</label>
                                </div>
                                <div style={{marginRight:'5px'}}>
                                    <img src={paypalP} height="38px"/>
                                    <img src={paypalWord} height="38px"/>
                                </div>
                            </div>
                            <div style={paypalRowContainer}>
                                <input className='email-input' placeholder='cart total     $99.97'/>
                            </div>
                            <div style={paypalRowContainer}>
                                <input className='email-input' placeholder='shipping     -' />
                            </div>
                            <div style={paypalRowContainer}>
                                <input className='email-input' placeholder='order total     $99.97' />
                            </div>
                            <div style={paypalRowAgreementContainer}>
                                <div style={paypalAreementCheckbox}>
                                    <input className='email-input' type='checkbox' />
                                </div>
                                <div style={paypalAreement}>
                                    <span>I have read and agree to the terms & conditions and accept the return policy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
                <div className='main-checkout-button-container'>
                    <div className='checkout-button-container'>
                        <button style={editShippingButton} onClick={editShippingDetails}>edit shipping</button>
                        <button style={updateShippingButton} onClick={saveUpdatedShippingDetails}>save updates</button>
                    </div>
                    <div className='checkout-button-container'>
                        <button style={checkoutCancelButton}>cancel</button>
                        {
                            opacityLayer.display === "none" ? 
                            <>
                            <button style={checkoutProcessCreditButton}>process payment</button>
                            <button style={checkoutProcessPaypalButton}>pay with PAYPAL</button>
                            </>
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Checkout;
