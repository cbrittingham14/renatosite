import axios from 'axios';

export default {
  //get all shop items
  getAll: function(){
    return axios.get('/api/shopitems');
  },

};