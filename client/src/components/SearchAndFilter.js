import React, { useRef } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import API from '../utils/API';

function SearchAndFilter (){

  const [state, dispatch] = useStoreContext();
  let timeoutID;
  
  const searchRef = useRef();
  const categoryRef = useRef();
  const sortRef = useRef();

  const handleChange = (e) => {

    e.preventDefault();
    clearTimeout(timeoutID);

    timeoutID = setTimeout(()=> {
        API.regexSearch(searchRef.current.value)
        .then( ({ data }) => {
          console.log('DATA: ', data);
          console.log('TYPEOF: ', typeof data);
          if(typeof data === 'object'){
            dispatch({ type: 'set-display', payload: data });
          }
        }).catch(err=> console.log(err));
    }, 550)

  }
  const setHtml = () => {
    return (
      <div className='row'>
        <div className='col'>
          <input type='text' placeholder='Search' onChange ={handleChange} ref={searchRef}/>
        </div>
        <div className='col'>
          <select ref={categoryRef} >
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