import axios from 'axios'
const url = 'https://fir-dynamiclinks-e43dd.web.app/practical-api.json'

//here i'm using axios for api calling and we also can use fetch instead of axios.
export const getItemList = async() =>{
    const response = await axios.get(url)
    return response;
}