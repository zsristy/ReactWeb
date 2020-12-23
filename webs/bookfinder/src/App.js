import React,{useState} from 'react';
import Navigationbar from './component/navigationbar';
import Searchbar from './component/searchbar';
import Booklist from './component/booklist';
import {getBook} from './api/Book';

const App=()=>{
  const [searchedbook, setsearchedbook] = useState("");
  const [books,setbooks]=useState([]);

  const handleChange=(event)=>{
    //console.log(event.target.value)
    setsearchedbook(event.target.value);
  }

  const handleSubmit= async(event)=>{
    event.preventDefault();
    await getBook(searchedbook,setbooks);
  }

  return(
    <div>
      <Navigationbar/>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Booklist books={books}/>
    </div>
  )
}

export default App;
