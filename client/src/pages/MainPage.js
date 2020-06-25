import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import ShopItem from '../components/ShopItem';
import API from '../utils/API';
import AddForm from '../components/AddForm';

function MainPage (){

  const [state, dispatch] = useStoreContext();
  let shopItems = [];

  const setRender =  () => {
    if(state.displayItems) {
     shopItems = state.displayItems.map(e => {
        return <ShopItem props={e} key={e._id} />
      });
    }
  };

  useEffect(()=>{
    API.getAll().then(({ data }) => {
      dispatch({ type: 'set-display', payload: data});
    }).catch(err => console.error(err));
  }, []);

  return(
    <div>
      {setRender()}
      {shopItems}
      <AddForm />
    </div>
  );
};
export default MainPage;