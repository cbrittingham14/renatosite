import React, { useEffect } from 'react';
// import { useStoreContext } from '../utils/GlobalState';
import ShopItem from '../components/ShopItem';
import API from '../utils/API';


function MainPage (){

  // const [state, dispatch] = useStoreContext();

  useEffect(()=>{
    API.getAll().then(res => {
      console.log(res);
    }).catch(err => console.error(err));
    API.test().then(res=> console.log('test', res)).catch(err=> console.log(err));
  })

  return(
    <div>
      <ShopItem />
    </div>
  )
};
export default MainPage;