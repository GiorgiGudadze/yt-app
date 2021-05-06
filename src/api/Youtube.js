import axios from 'axios';

const KEY = 'AIzaSyATbLPGErgk-6HBuA-10BwYP96qaVpl40I';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})
