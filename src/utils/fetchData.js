import axios from 'axios';
const BASE_URL = 'https://youtube138.p.rapidapi.com';
const options = {
    params: {
       maxResults:50,
      },
    headers: {
        'X-RapidAPI-Key': '424d7c9dfamshffa6e482b0c442fp1b9b5cjsn9c4194b082b8',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
};
export const fetchData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data);
    return data;
}
