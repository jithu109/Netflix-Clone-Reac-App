import axios from "axios";

const instancetmbd = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
 
export default instancetmbd;