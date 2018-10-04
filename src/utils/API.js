import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "f3e1b0323f464751a8bf08e2474e3a4d";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  
  getArticles: function() {
    return axios.get("/");
  },
  
  saveArticles: function(articleData) {
    return axios.post("/", articleData);
  },
  deleteArticles: function(id) {
    return axios.delete("/" + id);
  },
 
  }
;
