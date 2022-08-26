import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addBooks } from './BookSlice';
import {useNavigate} from 'react-router-dom'

const AddBooks = () => {
    const [title,setTitle] = useState('');
    const [author ,setAuthor] = useState('')
    const navigate = useNavigate()
    const [publication,SetPublication] = useState('')
    console.log(title,author,publication);
    const numberOfBooks = useSelector(state=>state.bookrducer.books.length);
    const dispatch = useDispatch()
    const handleSubmit = (ev)=>{
        ev.preventDefault()
        const newBook = {id:numberOfBooks,title,author,publication};
        dispatch(addBooks(newBook))
        navigate('/show-books',{replace:true})
    }
    return (
        <div>
     <div class="container">
  <h2>Vertical (basic) form</h2>
  <form className='w-25 m-auto' onSubmit={handleSubmit}>
    <div class="form-group">
      <label for="email">Title:</label>
      <input type="text" class="form-control" onChange={(titleName)=>setTitle(titleName.target.value)} id="email" placeholder="Enter Title" name="email" value={title}  required/>
    </div>
    <div class="form-group">
      <label for="pwd">Author:</label>
      <input type="text" class="form-control" onChange={(authorName)=>setAuthor(authorName.target.value)} id="pwd" placeholder="Enter Author" name="pwd" value={author} required/>
    </div>
    <div class="form-group">
      <label for="pwd">Publication:</label>
      <input type="text" class="form-control" id="pwd" onChange={(publicName)=>SetPublication(publicName.target.value)}  value={publication} placeholder="Enter Publication" name="pwd" required/>
    </div>
    <button type="submit" class="btn btn-primary mt-3 w-100">Submit</button>
  </form>
</div>
        </div>
    );
};

export default AddBooks;