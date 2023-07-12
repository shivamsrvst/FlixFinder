import { useState, useEffect } from "react"

export const useFetch = (apiPath,queryTerm="") => {
    const [data,setData]=useState([]);
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=90f32b816806867cde4487813a40cf2e&query=${queryTerm}`;
    useEffect(()=>{
        async function fetchMovies(){
          const response=await fetch(url);
          const json= await response.json();
          setData(json.results);     
        }
        fetchMovies();
      },[url]);
  return {data};
}
