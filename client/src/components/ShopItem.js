import React from 'react';
import { useStoreContext } from '../utils/GlobalState';

function ShopItem() {

  const [state, dispatch] = useStoreContext();

  const addToCart = (e) => {
    e.preventDefault();
    console.log(e.target);
    dispatch({type: 'add', payload: e.target});
    console.log('store', state);
  }

  return(
    <div className='card'>
      <img src='...' className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className='btn btn-primary' onClick={addToCart}>Add to Cart</ button>
      </div>
    </div>
  )
}
export default ShopItem;