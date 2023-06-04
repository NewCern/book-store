import * as React from 'react';

const container = {
    display:'flex',
    width:'100%',
    // border:'1px solid green',
    height:'7%',
    fontFamily:'Arial, sans-serif'
};
const logoContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'15%',
    fontSize:'20px',
    // border:'1px solid',
    fontWeight:'900',
    color:'#2c844f',
};
const searchContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'55%',
    // border:'1px solid'
};
const searchInputStyle = {
    marginRight:'15px',
    width:'50%'
};
const searchButtonStyle = {
    width:'20%',
    border:'none',
    color:'white',
    backgroundColor:'#2c844f',
    border:'2px solid green',
    borderRadius:'20px',
    wordSpacing:'3px'
};
const homeContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    color:'#2c844f',
    fontWeight:'600',
    // border:'1px solid'
};
const loginContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    color:'#2c844f',
    fontWeight:'600',
    // border:'1px solid'
};
const adminContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    color:'#2c844f',
    fontWeight:'600',
    // border:'1px solid'
};

function Navbar(props){
    
    return (
        <div style={container}>
            <div style={logoContainer}>Lernas</div>
            <div style={searchContainer}>
                <input style={searchInputStyle} type="text"/>
                <button style={searchButtonStyle}>Search</button>
            </div>
            <div style={homeContainer}>home</div>
            <div style={loginContainer}>login</div>
            <div style={adminContainer}>admin</div>
        </div>
    );
}
export default Navbar;

// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   border: 1px solid green;
//   height: 7%;

//   @media screen and (max-width: 600px) {
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 15%;
//   border: 1px solid;

//   @media screen and (max-width: 600px) {
//     width: 100%;
//   }
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 55%;
//   border: 1px solid;

//   @media screen and (max-width: 600px) {
//     width: 100%;
//   }
// `;

// const HomeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 10%;
//   border: 1px solid;

//   @media screen and (max-width: 600px) {
//     width: 50%;
//   }
// `;

// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 10%;
//   border: 1px solid;

//   @media screen and (max-width: 600px) {
//     width: 50%;
//   }
// `;

// const AdminContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 10%;
//   border: 1px solid;

//   @media screen and (max-width: 600px) {
//     width: 50%;
//   }
// `;

// function Navbar(props) {
//   return (
//     <Container>
//       <LogoContainer>LOGO</LogoContainer>
//       <SearchContainer>SEARCH</SearchContainer>
//       <HomeContainer>home</HomeContainer>
//       <LoginContainer>login</LoginContainer>
//       <AdminContainer>admin</AdminContainer>
//     </Container>
//   );
// }

// export default Navbar;
