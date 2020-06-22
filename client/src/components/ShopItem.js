import React from 'react';
import { useStoreContext } from '../utils/GlobalState';

function ShopItem( props ) {

  const [state, dispatch] = useStoreContext();

  const addToCart = (e) => {
    console.log('e ', e);
    dispatch({type: 'add', payload: e});
    console.log('state', state);
  }

  const setRender = (e) => {
    if(e.props){
      return(
        <div className='card' id={e.props._id}>
          <img src={e.props.imageURL} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{e.props.name}</h5>
            <p className='card-text'>{e.props.description}</p>
            <button className='btn btn-primary' onClick={()=> addToCart(e.props._id)}>Add to Cart</ button>
          </div>
        </div>
      )
    } else {
      return(
        <div>NO ITEMS TO SHOW</div>
      )
    }
      
  };
  return(
    <div>{setRender(props)}</div>
  )
}
export default ShopItem;