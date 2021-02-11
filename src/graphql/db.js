import axios from "axios";
const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
import connection from "../index.js";

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
// export const getAtable = async col => {
//   console.log('hi');
//   try{
//     let qry = 'Select col1,col2 from atable';
//     const results = {};
//     connection.query(qry,function(err,results,fields){
//       if(err) throw err;
//       console.table(results);      
//     });
//     return results;
//   }catch(err){
//     console.log('async error');
//   }
// };
export const getAtable = async col => {
  console.log('hi');
  let myPromise = new Promise(function(myResolve,myReject){
    let qry = 'Select col1,col2 from atable';
    connection.query(qry,function(err,results,fields){
      if(err) throw err;
      console.table(results);
      myResolve(results);      
    });    
  })
  return await myPromise;
};
