import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { loading, notLoading } from '../../../store/loadingSlice';
import { FileUploadOutlined } from '@mui/icons-material';

const Container = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    alignItems:'center',
    height:'70%',
    width:'80%',
    // border:'1px solid',
};

const loginContainer = {
    display:'flex', 
    justifyContent:'space-between', 
    flexDirection:'column', 
    height:'180px',
    width:'350px',
    alignItems:'center',
    border:'1px solid silver',
    borderRadius:'10px',
    paddingBottom:'30px',
    boxShadow:'3px 3px 3px rgba(200, 200, 200, .5)',
};

const submitContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'80%',
    marginTop:'15px',
    // border:'1px solid',
};
const userNameContainer = {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    width:'80%',
};
const passwordContainer = {
    display:'flex',
    justifyContent:'space-between',
    width:'80%',
};
const userNameStyle = {
    fontSize:'12px', 
    textAlign:'center', 
    width:'97%',
};
const passwordStyle = {
    fontSize:'12px', 
    textAlign:'center', 
    width:'100%',
};
const submitStyle = {
    backgroundColor:'green',
    color:'white',
    border:'none',
    width:'55%',
    padding:'5px',
    borderRadius:'10px',
};

function Login(props) {
    const URL = process.env.REACT_APP_URL;

    const isLoading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const [dataObject, setDataObject] = useState({});
    const [loading, setLoading] = useState(false);
    const[input, setInput] = useState({
        path: "",
    })

    const handleChange = (e) => {
        console.log(isLoading)
        const{name, value} = e.target;
        setInput(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    ;}

    const registerUser = async () => {
        try{
            if(input.path !== ""){
                setLoading(true);
                // dispatch(loading());
                await axios.post(URL, dataObject)
                .then((res) => {
                    setLoading(false);
                    console.log("Here is the response: ", res);
                    // dispatch(notLoading());
                });
                setInput({
                    path: "",
                })
            }
        } catch(error){
            console.log(error)
        }
    }
  return (
        <div style={Container}>
            <div style={loginContainer}>
                <h4 style={{color:'grey'}}>User LOGIN</h4>
                <div style={userNameContainer}>
                    <input style={userNameStyle} name='path' type='text' placeholder='user name' value={input.path} onChange={handleChange}/>
                </div>
                <div style={passwordContainer}>
                    <input style={passwordStyle} name='path' type='text' placeholder='password' value={input.path} onChange={handleChange}/>
                </div>
                <div style={submitContainer}>
                        <button style={submitStyle}>SUBMIT</button>
                </div>
        </div>
    </div>
  );
}

export default Login;
