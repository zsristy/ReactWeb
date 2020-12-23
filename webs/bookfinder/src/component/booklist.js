import React from 'react';
import Bookcard from './bookcard'

const Booklist=(props)=>{
  return(
    <div className="container">
    <div className="row">
      <div className="col s12">
        {props.books.map((book,i)=>{
            console.log(book);
            return(<Bookcard book={book}/>)
        })}
      </div>
    </div>
  </div>
  )
}


export default Booklist;