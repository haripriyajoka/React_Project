import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./stories.scss"

const Stories = () => {

    const {currentUser} = useContext(AuthContext);

    const stories =[
        {
            id: 1,
            name: "John Doe",
            img: "Pictures/post-3.jpg",
        },
        {
            id: 2,
            name: "John Doe",
            img: "Pictures/post-3.jpg",
        },
        {
            id: 3,
            name: "John Doe",
            img: "Pictures/post-3.jpg",
        },
        {
            id: 4,
            name: "John Doe",
            img: "Pictures/post-3.jpg",
        },
        
    ];

  return (
    <div className='stories'>
        <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story">
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories