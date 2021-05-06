import SearchBar from "./SearchBar";
import React,{useState,useEffect} from 'react';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () =>{
    const [selectedVideo,setSelectedVideo] = useState(null);
    const [videos,getSearchValue] = useVideos('buildings');

    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos])

    return(
        <div className="ui container">
        <SearchBar getSeacrh={getSearchValue}/>
        <div className="ui grid">
            <div className="ui row">

                <div className="eleven wide column">
                <VideoDetail video={selectedVideo}/>
                </div>

                <div className="five wide column">
                <VideoList videos={videos} onSelectedVideo={(video)=>{setSelectedVideo(video)}}/>
                </div>

            </div>
        </div>
        </div>
    )

}

 
export default App;