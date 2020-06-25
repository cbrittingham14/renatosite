import axios from 'axios';

export default {
  //get all shop items
  getAll: function(){
    return axios.get('/api/shopitems');
  },
  getClothing: function(){
    console.log('CALLED CLOTHING');
    return axios.get('/api/clothing');
  },
  getJewelry: function(){
    return axios.get('/api/jewelry');
  },
  regexSearch: function (query){
    return axios.get('/api/regex/' + query);
  },
  addShopItem: function(newItem){
    return axios.post('/api/addnew', newItem)
  }
};