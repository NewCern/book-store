import * as React from 'react';
import SideBarCategories from './SideBarCategories';
// import { authors } from '../../../database/books';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, updateTotal } from '../../../store/cartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { store } from '../../../store/store';
import '../../../css/checkout.css';

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

function Checkout(props){
    const persistor = persistStore(store);
    const reduxCart = useSelector(state => state.cart);
    const dispatch = useDispatch();


    React.useEffect(() => {
    }, [reduxCart.items]);
    
    return (
        <div>
        <div style={container}>
            <div style={innerContainer}>
                <div className='infoContainer'>
                    <div className='billing-shipping-info-header'>billing/shipping information</div>
                    <div className='customer-address-container'>
                        <div className='inner-customer-address-container'>
                            <div className='conditions-of-use'>must be the same as your credit card address</div>
                            <div className='row-container'>
                                <input className='name-input' placeholder='first name'/>
                                <input className='name-input' placeholder='last name'/>
                            </div>
                            <div className='row-container'>
                                <input className='email-input' placeholder='email' />
                            </div>
                            <div className='row-container'>
                                <input className='email-input' placeholder='address' />
                            </div>
                            <div className='row-container'>
                                <input className='email-input' placeholder='apt, unit, etc. (optional)' />
                            </div>
                            <div className='row-container'>
                                <input className='name-input' placeholder='city'/>
                                <input className='name-input' placeholder='zip code'/>
                            </div>
                            <div className='row-container'>
                                <input className='email-input' placeholder='state' />
                            </div>
                            <div className='row-container'>
                                <input style={{marginBottom:'15px'}} className='email-input' placeholder='phone' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='paymentInfoContainer'>
                    <div className='payment-info-header'>credit card information</div>
                </div>
                
            </div>
        </div>
        </div>
    );
}
export default Checkout;
