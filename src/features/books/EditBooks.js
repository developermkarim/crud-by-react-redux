import React from 'react';

const EditBooks = () => {
    return (
        <div>
     <div class="container">
  <h2>Vertical (basic) form</h2>
  <form className='w-25 m-auto' >
    <div class="form-group">
      <label for="email">Title:</label>
      <input type="text" class="form-control" id="email" placeholder="Enter Title" name="email"  required/>
    </div>
    <div class="form-group">
      <label for="pwd">Author:</label>
      <input type="text" class="form-control"  id="pwd" placeholder="Enter Author" name="pwd"  required/>
    </div>
    <div class="form-group">
      <label for="pwd">Publication:</label>
      <input type="text" class="form-control" id="pwd" /* value={publication} */ placeholder="Enter Publication" name="pwd" required/>
    </div>
    <button type="submit" class="btn btn-primary mt-3 w-100">Submit</button>
  </form>
</div>
        </div>
    );
};

export default EditBooks;