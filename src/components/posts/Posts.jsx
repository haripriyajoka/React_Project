import Post from "../post/Post";
import "./posts.scss"

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "Pictures/Nissy.jpg",
      desc: "Evening blossome",
      img: "Pictures/feed-2.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic: "Pictures/ProPic.jpeg",
      desc: "Evening blossome",
    },
  ];

  return <div className='posts'>
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>;

};

export default Posts;