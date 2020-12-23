import React from 'react';

const Navigationbar=()=>{
  return(
    <nav>
        <div className="nav-wrapper orange">
        <a href="#" className="brand-logo center"><i style={mystyle}>__ Book Finder __</i></a>
    </div>
    </nav>
  )
}

const mystyle= {
        fontWeight:'bold', 
        fontFamily:'-moz-initial', 
        fontSize: 36 
}


export default Navigationbar;