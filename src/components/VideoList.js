import VideoItem from "./VideoItem";

const VideoList = ({videos,onSelectedVideo}) => {
    const mapVideo = videos.map(v=>{return <VideoItem key={v.id.videoId} onSelectedVideo={onSelectedVideo} video={v}/>})
    return ( <div className="ui relaxed divided list">{mapVideo}</div> );
}
 
export default VideoList;