import "./leftBar.scss";

const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="main">
          <div className="user">
            <img src="Pictures/ProPic.jpeg" alt="" />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src="Pictures/Friends.png" alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="Pictures/groups.png" alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src="Pictures/market-place.webp" alt="" />
            <span>Market place</span>
          </div>
          <div className="item">
            <img src="Pictures/watch.png" alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src="Pictures/memories.webp" alt="" />
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
            <img src="Pictures/gaming.jpg" alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src="Pictures/gallary.png" alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src="Pictures/videos.png" alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src="Pictures/messages.png" alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="main">
          <span>Others</span>
          <div className="item">
            <img src="Pictures/fundraiser.png" alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src="Pictures/tutorials.webp" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="Pictures/courses.png" alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar