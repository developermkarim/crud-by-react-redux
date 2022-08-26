import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux';
import ShowBookByTable from './ShowBookByTable';
import { deleteBooks } from './BookSlice';
const ShowBooks = () => {
    const bookshow = useSelector(state=>state.bookrducer.books);
    console.log(bookshow);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handledeleteBook = (deletId)=>{
     dispatch(deleteBooks(deletId));
     console.log(deletId);
    }
    return (
        <div>
            <h1> Show Books</h1>
           <button className='ml-auto' onClick={()=>navigate('/add-books',{replace:true})} > Add books</button>
           
            <table className="table">
            <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Book Name</th>
            <th scope="col"></th>
            <th scope="col">Publication</th>
            <th scope=''>Action</th>
          </tr>
        </thead>
        <tbody>
            {bookshow &&
            bookshow.map(book=> 
              <ShowBookByTable key={book.id}
              bookData={book}
             deletefunc={handledeleteBook} 
              >
            </ShowBookByTable>
            )
            }
            ;
            </tbody>
            </table>
        </div>
    );
};

export default ShowBooks;