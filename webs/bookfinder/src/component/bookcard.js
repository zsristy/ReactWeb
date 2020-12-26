import React from 'react';
import {Link} from 'react-router-dom';

const Bookcard=(props)=>{
    const imgsrc=props.book.volumeInfo.imageLinks.thumbnail;
    const authors=props.book.volumeInfo.authors;
  return(
    <div className='col s2' style={{margin: 10}}>
    <div className="card medium col s12">
    <div className="card-image waves-effect waves-block waves-light" >
      <img src={imgsrc} style={{width: 185, height:240}}/>
    </div>
    <div className="card-stacked">
    <div className="card-content" style={{height:90}}>
      <p><b><i>Author: </i></b></p>
      {authors!=null ? authors.map((author,i) => <p>{i+1}. { author }</p>):"Unknown"}     
    </div>
    <div className="card-action">
      <Link to={{pathname:"/book/:id"+props.book.id, state: {details: props.book}}}>See details</Link>
    </div>
    </div>

  </div>
  </div>
  )
}


export default Bookcard;