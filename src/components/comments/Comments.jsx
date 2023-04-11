import "./comments.scss"

const Comments = () => {

    const comments = [
        {
            id:1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name:"John Doe",
            userId: 1,
            profilePic:"Pictures/Nissy.jpg",
        },
        {
            id:2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name:"John Doe",
            userId: 2,
            profilePic:"Pictures/feed-4.jpeg",
        },
    ];

  return (
    <div className="comments">
        {comments.map((comment) => (
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  );
};

export default Comments;