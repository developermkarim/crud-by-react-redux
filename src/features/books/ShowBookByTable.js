import React from 'react';
// import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

const ShowBookByTable = ({bookData,deletefunc}) => {
    console.log(bookData);
    const {id,title,author,publication} = bookData;
  //  const navigate = useNavigate();

    return (
          <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{author}</td>
            <td>{publication}</td>
            <td><Link to='/edit-books' className='btn btn-primary'>Edit</Link> </td>
             <td><button onClick={()=>deletefunc(id)} className='btn btn-danger'>Delete</button></td>
          </tr>
    );
};

export default ShowBookByTable;