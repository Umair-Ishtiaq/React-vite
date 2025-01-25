import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    default_postList
  );

  const AddPost = () => {};
  const DeletePost = () => {};

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

export default PostListProvider;
