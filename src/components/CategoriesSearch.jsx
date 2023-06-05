import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    display:'flex',
    width:'100%',
    borderTop:'2px solid black',
    borderBottom:'2px solid black',
    height:'90%',
    fontFamily:'Arial, sans-serif',
    backgroundColor:'#728991',
};

const SearchTermBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '10%',
    fontWeight: '600',
    fontSize: '25px',
    borderRadius: '2px'
}

const returnedItems = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '10%',
    fontWeight: '600',
    fontSize: '20px',
    backgroundColor: 'lightgrey',
    margin: '3px',
    padding: '3px',
    border:'1px solid black',
    borderRadius: '2px'
}
const addToCartButton = {
    backgroundColor: 'grey',
    border:'2px solid black',
    margin:'3px',
    borderRadius: '2px'
}

function CategoriesSearch(props){
    //This here is the pseudo code for the components functionality.


    // let mydata = Database.getAllBooks();
    // let narrowed = mydata.filter(t => t.category == props.searchTerm)
    // let todos = narrowed((book) => {
    //     return <div style={container}>
    //         <div className='SearchTermBox' style={SearchTermBox}>
    //             <h2>Search Term Here</h2>
    //         </div>
    //         <div style={returnedItems}>
    //             <h2>{book.title} : Written By {book.author}</h2>
    //         </div>
    //     </div>})
    return (
        <div style={container}>
            <div className='SearchTermBox' style={SearchTermBox}>
                <h2>Search Term Here</h2>
            </div>
            <div style={returnedItems}>
                <h2>War and Peace : Written By Leo Tolstoy</h2>
                <a style={addToCartButton}>Add to Cart</a>
            </div>
            <div style={returnedItems}>
                <h2>The Great Gatsby : Written By F. Scott Fitzgerald</h2>
                <a style={addToCartButton}>Add to Cart</a>
            </div>
            <div style={returnedItems}>
                <h2>The Adventures of Huckleberry Fin : Written By Mark Twain</h2>
                <a style={addToCartButton}>Add to Cart</a>
            </div>
            <div style={returnedItems}>
                <h2>The Divine Comedy : Written By Dante Alighiero</h2>
                <a style={addToCartButton}>Add to Cart</a>
            </div>
            <div style={returnedItems}>
                <h2>A Storm of Swords : Written By George R. R. Martin</h2>
                <a style={addToCartButton}>Add to Cart</a>
            </div>
        </div>
    );
}
export default CategoriesSearch;