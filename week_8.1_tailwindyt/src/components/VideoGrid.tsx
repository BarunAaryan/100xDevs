import { VideoCard } from "./VideoCard"
const VIDEOS =[
    {
        title:"How to Learn Coding in 30 days",
        logo:"logo.jpg",
        image:"photo.png",
        author:"Barun Aaryan",
        views:"14 M",
        timestamp:"23 days ago",
    },
    {
        title:"How to Learn Jumping in 30 days",
        logo:"logo.jpg",
        image:"photo.png",
        author:"Barun Aaryan",
        views:"14 M",
        timestamp:"23 days ago",
    },
    {
        title:"How to Learn Playing in 30 days",
        logo:"logo.jpg",
        image:"photo.png",
        author:"Barun Aaryan",
        views:"14 M",
        timestamp:"23 days ago",
    },
    {
        title:"How to Learn Jumping in 30 days",
        logo:"logo.jpg",
        image:"photo.png",
        author:"Barun Aaryan",
        views:"14 M",
        timestamp:"23 days ago",
    }, {
        title:"How to Learn Jumping in 30 days",
        logo:"logo.jpg",
        image:"photo.png",
        author:"Barun Aaryan",
        views:"14 M",
        timestamp:"23 days ago",
    }, {
        title:"How to Learn Jumping in 30 days",
        logo:"logo.jpg",
        image:"photo.png",
        author:"Barun Aaryan",
        views:"14 M",
        timestamp:"23 days ago",
    }
]
export const VideoGrid =()=>{
return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
{VIDEOS.map( video=> <div>
    <VideoCard
     title= {video.title}
     logo={video.logo}
     image={video.image}
     author={video.author}
     views={video.views}
     timestamp={video.timestamp}/>
</div>)}


</div>
}