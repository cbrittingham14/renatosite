import axios from 'axios';

export default {
  //get all shop items
  getAll: function(){
    return axios.get('/api/shopitems');
  },

  addShopItem: function(newItem){
    return axios.post('/api/addnew', newItem)
  },

  regexSearch: function (query){
    return axios.get('/api/regex/' + query);
  }

};