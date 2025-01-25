import { useContext } from "react";
import Card from "../Card/Card";
import { PostList as post_list } from "../../store/post-list-store";

function PostList({ post }) {
  const { postList } = useContext(post_list);
  return (
    <>
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
}
export default PostList;
