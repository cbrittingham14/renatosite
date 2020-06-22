import React, { useRef } from 'react';

function AddForm () {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('categoryRef: ', categoryRef.current.value);
    console.log('name: ', document.getElementById('nameInput').value);
    console.log('category: ', document.getElementById('category').value);
  };

  const nameRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const setForm = () => {
    return(
      <form>
      <div className='form-group'>
        <label >Item Name </label>
        <input type='text' id='nameInput' ref={nameRef} />
      </div>
      <div className='form-group'>
        <label>Item Description </label>
        <input type='text' id='description' ref={descriptionRef} />
      </div>
      <div className='form-group'>
        <label>Item Category </label>
        <select id='category' className='form-control' ref={categoryRef} >
            <option>Jewelry</option>
            <option>Clothing</option>
            <option>Other</option>
        </select>
      </div>
      <div className='form-group'>
        <label >Item Price </label>
        <input type='text' id='price' ref={priceRef} />
      </div>
      <div className='form-group'>
        <label >Image URL </label>
        <input type='text' id='imageURL' ref={imageRef} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
    )
  }

  return (
  <div>{setForm()}</div>
  )

};
export default AddForm;