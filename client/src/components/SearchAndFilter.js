import React, { useRef } from 'react';
import { useStoreContext } from '../utils/GlobalState';

function SearchAndFilter (){

  const [state, dispatch] = useStoreContext();
  
  const searchRef = useRef();
  const categoryRef = useRef();
  const sortRef = useRef();

  const setHtml = () => {
    return (
      <div className='row'>
        <div className='col'>
          <input type='text' placeholder='Search' ref={searchRef}/>
        </div>
        <div className='col'>
          <select ref={categoryRef}>
            <option>All</option>
            <option>Clothing</option>
            <option>Jewelry</option>
          </select>
        </div>
        <div className='col'>
          <select ref={sortRef}>
            <option>Price High to Low</option>
            <option>Price Low to High</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div>{setHtml()}</div>
  );
};
export default SearchAndFilter;