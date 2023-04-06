import "./posts.scss"

const posts = () => {

  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "Pictures/ProPic.jpeg",
      desc:"Evening blossome",
      img:"Picture/feed-2.jpeg",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 1,
      profilePic: "Pictures/ProPic.jpeg",
      desc:"Evening blossome",
      img:"Picture/feed-2.jpeg",
    },
  ];

  return (
    <div className='posts'>posts</div>
  )
}

export default posts