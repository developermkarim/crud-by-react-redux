import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import ShowBookByTable from './ShowBookByTable';
const ShowBooks = () => {
    const bookshow = useSelector(state=>state.bookrducer.books);
    console.log(bookshow);
    const navigate = useNavigate();
    return (
        <div>
            <h1> Show Books</h1>
           <button onClick={()=>navigate('add-books')} > Add books</button>
            <table class="table">
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