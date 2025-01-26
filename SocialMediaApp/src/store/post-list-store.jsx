import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
    return newPostList;
  }
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    default_postList
  );

  const AddPost = (post) => {
    console.log(post);
    dispatchpostList({ type: "ADD_POST", payload: { post } });
  };
  const DeletePost = (postID) => {
    dispatchpostList({ type: "DELETE_POST", payload: { postID } });
    console.log("deleted");
  };

  return (
    <PostList.Provider value={{ postList, AddPost, DeletePost }}>
      {children}
    </PostList.Provider>
  );
};

const default_postList = [
  {
    id: "1",
    title: "Go to Lahore",
    body: "Hi i am going to Lahore peacout",
    reactions: 0,
    userID: "user-3",
    tags: ["vecations", "family"],
  },
  {
    id: "2",
    title: "React Done",
    body: "Working with react",
    reactions: 15,
    userID: "user-12",
    tags: ["react", "web-development"],
  },
];

export { PostListProvider };
