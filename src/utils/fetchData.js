import axios from 'axios';
const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    params: {
       maxResults:50,
      },
    headers: {
        'X-RapidAPI-Key':'d27c7dfc22msh7d2ef1974007ea4p100468jsn688119a7b227',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
};
export const fetchData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data);
    return data;
}
