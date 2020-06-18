import axios from 'axios';

export default {
  //get all shop items
  getAll: function(){
    console.log('getall got called');
    return axios.get('/api/shopitems');
  },

  test: function(){
    return axios.get('/test');
  }
};