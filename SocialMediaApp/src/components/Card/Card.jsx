import "./Card.css";

function Card({ post }) {
  return (
    <>
      <div className="card post-card w-25 m-4" style={{ width: "18rem;" }}>
        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary mx-1">{tag}</span>
          ))}
          <span className="badge text-bg-success">Success</span>
        </div>
      </div>
    </>
  );
}
export default Card;
