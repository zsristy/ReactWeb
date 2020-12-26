import React,{useState} from 'react';
import Navigationbar from './component/navigationbar';
import Searchbar from './component/searchbar';
import Booklist from './component/booklist';
import {getBook} from './api/Book';
import Pagination from './component/pagination';

const App=()=>{
  const [searchedbook, setsearchedbook] = useState("");
  const [books,setbooks]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [totalPages,setTotalPages]=useState(0);

  const handleChange=(event)=>{
    setsearchedbook(event.target.value);
  }

  const handleSubmit= async(event)=>{
    event.preventDefault();
    await getBook(searchedbook,setbooks, currentPage, setTotalPages);
  }

  const nextPage=async(page_number)=>{
    setCurrentPage(page_number);
    await getBook(searchedbook,setbooks, currentPage, setTotalPages);
  }

  return(
    <div>
      <Navigationbar/>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Booklist books={books}/>
      {totalPages>1?(<Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages} />):""}
    </div>
  )
}

export default App;
