import React, { useRef } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import API from '../utils/API';

function SearchAndFilter (){

  const [state, dispatch] = useStoreContext();
  let timeoutID;
  
  const searchRef = useRef();
  const categoryRef = useRef();
  const sortRef = useRef();

  const setFilter = (value) => {
    switch(value){
      case 'Jewelry':
        console.log(typeof API.getJewelry)
        API.getJewelry().then(({ data })=> {
          console.log('jewelryitems: ', data);
          dispatch({ type: 'set-display', payload: data});
        }).catch(err=> console.log(err));
      break
      case 'Clothing':
        API.getClothing().then(({ data })=> {
          console.log('clothingitems: ', data);
          dispatch({ type: 'set-display', payload: data});
        }).catch(err=> console.log(err));
      break
      case 'All':
        API.getAll().then(({ data })=> {
          dispatch({ type: 'set-display', payload: data});
        }).catch(err=>console.log(err));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    clearTimeout(timeoutID);
    const { name, value } = e.target;

    switch(name){
      case 'category':
        setFilter(value);
      break
      
      case 'regex-search':
        timeoutID = setTimeout(()=> {
          API.regexSearch(searchRef.current.value)
          .then( ({ data }) => {
            console.log('DATA: ', data);
            console.log('TYPEOF: ', typeof data);
            if(typeof data === 'object'){
              dispatch({ type: 'set-display', payload: data });
            }
          }).catch(err=> console.log(err));
      }, 550);
      break
    };
  };

  const setHtml = () => {
    return (
      <div className='row'>
        <div className='col'>
          <input type='text' placeholder='Search' name='regex-search' onChange ={handleChange} ref={searchRef}/>
        </div>
        <div className='col'>
          <select ref={categoryRef} name='category' onChange={handleChange}>
            <option>All</option>
            <option>Clothing</option>
            <option>Jewelry</option>
          </select>
        </div>
        <div className='col'>
          <select ref={sortRef} name='sort'>
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