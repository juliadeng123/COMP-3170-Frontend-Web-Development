export default function Story({story}){

    function shortenDescription(description) {
        if (typeof description !== 'string') {
            return ''; 
        }
        
        if (description.length > 300) {
            return description.substring(0, 300) + "..."; 
        }
        return description;
    }

    function RemoveStory(){
        function handleDelete(e) {
            if(e.target === e.currentTarget) {
                return;
            }
            
            if(e.target.tagName !== 'SPAN'){
                return;
            }
    
            e.currentTarget.remove(); 
        }
    
        return(
            <div className='story' onClick={handleDelete}>
                <span className="delete">x</span>
                <div className="stories" style={{display:"flex", flexDirection: "row", alignContent:"start", gap:"1em"}}>
                    <img className="story_image" src={story.image_url || "https://placehold.co/600x400/4c7da8/white?text=News+Story"} alt="news story" width={150} height={100} />
                    <div className="story-details" style={{display:"flex", flexDirection: "column"}}>
                        <a href={story.link} className="story-title" style={{textDecoration:"none"}} target="_blank"><h1>{story.title}</h1></a>
                        <h4 className="story-creator" style={{margin:"0"}}>By: {story.creator}</h4>
                    </div>
                </div>
                <div className="storyList">
                    <p>{shortenDescription(story.description)}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <RemoveStory/>
        </div>
    );
}