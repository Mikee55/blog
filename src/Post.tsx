import FirstPost from "./assets/Salon.jpeg";

const Post = () => {
  return (
    <div className="m-28">
      <div className="p-10">
        <img src={FirstPost} alt="Post 1" className="w-full object-cover" />
        <div className="m-5">
          <h2>Title</h2>
          <p>Description</p>
          <div className="flex">
            <p>Like</p>
            <p>Comment</p>
            <p>Share</p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <img src={FirstPost} alt="Post 1" className="w-full object-cover" />
        <div className="m-5">
          <h2>Title</h2>
          <p>Description</p>
          <div className="flex">
            <p>Like</p>
            <p>Comment</p>
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
<div>
  <img src="" alt="Post 1" />
  <p>Description</p>
</div>;
