import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/feed-4.jpeg" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/feed-4.jpeg" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <div className="online"/>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <div className="online"/>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <div className="online"/>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <div className="online"/>
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="./Pictures/post-3.jpg" alt="" />
              <div className="online"/>
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar