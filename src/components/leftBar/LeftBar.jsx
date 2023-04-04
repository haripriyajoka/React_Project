import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./leftBar.scss";

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);


  return (
    <div className='leftbar'>
      <div className="container">
        <div className="main">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src="Pictures/friends-2.png" alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="Pictures/group-2.png" alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src="Pictures/marketplace-1.webp" alt="" />
            <span>Market place</span>
          </div>
          <div className="item">
            <img src="Pictures/watch-1.webp" alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src="Pictures/memories-1.webp" alt="" />
            <span>Meories</span>
          </div>
        </div>
        <hr />
        <div className="main">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src="Pictures/events.png" alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="Pictures/gaming-1.png" alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src="Pictures/gallery-1.webp" alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src="Pictures/video-1.png" alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src="Pictures/messages-1.webp" alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="main">
          <span>Others</span>
          <div className="item">
            <img src="Pictures/funds-1.jpg" alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src="Pictures/tutorial-1.jpg" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="Pictures/course-1.png" alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar