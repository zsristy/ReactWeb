import axios from 'axios';

const Book = axios.create({
    baseURL:"https://www.googleapis.com/books/",
});

const getBook=(BookId, setBookId)=>{
    Book.get("/v1/volumes/", {
        params:{
            q: BookId,
            //key: "AIzaSyBweRrjAFKp9h1zOR2ctlgRIsoNvnbIB8c",
            
        }
    }).then((response)=>{
        //console.log(response.data.items);
        setBookId(response.data.items);
    });
};

export {getBook};

