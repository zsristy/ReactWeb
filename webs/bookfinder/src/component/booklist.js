import React from 'react';
import Bookcard from './bookcard'

const Booklist=(props)=>{
  return(
    <div className="row" style={{marginLeft:130}}>
     <div className="col s12"> 
        {props.books.map((book,i)=>{
            //console.log(book);
            return(<Bookcard book={book}/>)
        })}
     </div> 
    </div>
  )
}


export default Booklist;