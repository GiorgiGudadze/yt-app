import React,{useState,useEffect} from 'react';
import Youtube from '../api/Youtube';

const useVideos = (defaultSearch) => {

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        getSearchValue(defaultSearch)
    },[defaultSearch])

    const getSearchValue = async (value)=>{

        const res = await Youtube.get('/search',{
            params:{
                q:value
            }
        })

        setVideos(res.data.items);
    }

    return [videos,getSearchValue];
} 
 
export default useVideos;