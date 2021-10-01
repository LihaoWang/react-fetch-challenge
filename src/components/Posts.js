import PostItem from "./PostItem";
export default function Post({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
}
