import { useContext } from "react";
import "./Card.css";
import { MdDelete } from "react-icons/md";
import { PostList } from "../../store/post-list-store";

function Card({ post }) {
  const { DeletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card w-25 m-4" style={{ width: "18rem;" }}>
        <div className="card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => DeletePost(post.id)}
          >
            <MdDelete />
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary mx-1">
              {tag}
            </span>
          ))}
          <div className="my-3 alert alert-success" role="alert">
            This post is reacted by {post.reactions} people
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
