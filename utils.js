import axios from "axios"

export const img_300='https://image.tmdb.org/t/p/w300&#39';
export const img_500='https://image.tmdb.org/t/p/w500';

const api=axios.create({
    params:{
        api_key:import.meta.env.VITE_TMDB_API_KEY,
        language:"hu-HU",
        iclude_adult:false,
        sort_by:"popularity.desc"

    }
})

export const getTrendings=async ()=>{
    const response=await api.get("/trending/all/week")
    return response.data.results
}