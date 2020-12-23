import React from 'react';

const Bookcard=(props)=>{
  return(
    <div className='col s4'>
    <div className="card col s11">
    <div className="card-image waves-effect waves-block waves-light" >
      <img src={props.book.volumeInfo.imageLinks.thumbnail} style={{width: 220, height:300}}/>
    </div>
    <div className="card-content col s11">
      <span className="card-title">Card Title</span>
      <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>

      <p><a href="#">This is a link</a></p>
    </div>

  </div>
  </div>
  )
}


export default Bookcard;