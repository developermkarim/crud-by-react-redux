import React from 'react';
const ShowBookByTable = (props) => {
    console.log(props);
    const {id,title,author,publication} = props.bookData;
   
    return (
          <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{author}</td>
            <td>{publication}</td>
            <td><button className='btn btn-primary'>Edit</button> </td> <td><button className='btn btn-danger'>Delete</button></td>
          </tr>
    );
};

export default ShowBookByTable;