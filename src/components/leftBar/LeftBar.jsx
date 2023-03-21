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
          <div className="user">
            <img src="Pictures/Friends.png" alt="" />
            <span>Friends</span>
          </div>
          <div className="user">
            <img src="Pictures/groups.png" alt="" />
            <span>Groups</span>
          </div>
          <div className="user">
            <img src="Pictures/market-place.webp" alt="" />
            <span>Market place</span>
          </div>
          <div className="user">
            <img src="Pictures/watch.png" alt="" />
            <span>Watch</span>
          </div>
          <div className="user">
            <img src="Pictures/memories.webp" alt="" />
            <span>Meories</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar