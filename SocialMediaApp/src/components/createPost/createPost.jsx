import { useContext } from "react";
import "./createPost.css";
import { useRef } from "react";
import { PostList } from "../../store/post-list-store";
function CreatePost() {
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();
  const { AddPost } = useContext(PostList);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      userID: Date.now(),
      title: postTitle.current.value,
      body: postBody.current.value,
      reactions: reactions.current.value,
      tags: tags.current.value.split(/(\s+)/),
    };
    AddPost(post);
  };

  return (
    <>
      <form className="create-post w-50 m-3 mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            user-ID
          </label>
          <input
            type="Text"
            className="form-control"
            id="userId"
            ref={userId}
            placeholder="Enter user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="Text"
            className="form-control"
            id="title"
            ref={postTitle}
            placeholder="Enter Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            body
          </label>
          <textarea
            type="Text"
            className="form-control"
            id="body"
            ref={postBody}
            placeholder="Enter Body"
            rows={5}
          />
          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">
              Reactions
            </label>
            <input
              type="Text"
              className="form-control"
              id="reactions"
              ref={reactions}
              placeholder="Enter reactions"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="Text"
            className="form-control"
            id="tags"
            ref={tags}
            placeholder="Enter tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePost;
