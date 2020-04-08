import qs  from "query-string"

const config ={
  MOVIE_DB_BASE_URL :"https://api.themoviedb.org/3",
  MOVIE_DB_API_KEY:"39311c41479f08ddf9ea3943cacb7991"
}

const createURL =(relativeUrl,params)=>{
    const baseUrl = `${config.MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${config.MOVIE_DB_API_KEY}&language=en-US`;
    const queryParams = qs.stringify(params)

    return baseUrl.concat(queryParams)
}