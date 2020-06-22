import React, { useRef } from 'react';
import API from '../utils/API';

function AddForm () {

  const nameRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const clearInputs = () => {
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    categoryRef.current.value = '';
    priceRef.current.value = '';
    imageRef.current.value = '';
  };  

  const handleSubmit = (e) => {

    e.preventDefault();
    const itemToAdd = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      price: parseInt(priceRef.current.value),
      imageURL: imageRef.current.value
    };
    
    API.addShopItem(itemToAdd).then(res => {
      console.log('RES in API: ',res);
    }).catch(err=>console.log(err));

    clearInputs();
  };

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