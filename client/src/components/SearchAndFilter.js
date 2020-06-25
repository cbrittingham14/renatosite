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
      break
      case 'default':
        console.log('hit default');
    }
  };

  const setSort = (value) => {
    const orderedList = state.displayItems;
    switch(value){
      case 'Price High to Low':
        orderedList.sort((a,b) => b.price - a.price);
        dispatch({ type: 'set-display', payload: orderedList });
      break
      case 'Price Low to High':
        orderedList.sort((a,b) => a.price - b.price);
        dispatch({ type: 'set-display', payload: orderedList });
      break

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
      case 'sort':
        setSort(value);
      break
      case 'default':
        console.log('hit default');
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
          <select ref={sortRef} onChange={handleChange} name='sort'>
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