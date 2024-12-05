import FirstPost from "./assets/Salon.jpeg";
import Like from "./iconComponenets/heart";
import Comment from "./iconComponenets/Comment";
import Share from "./iconComponenets/Share";

const Post = () => {
  return (
    <div className="mx-40 my-32">
      <div className="m-10 border rounded-3xl shadow overflow-hidden">
        <img src={FirstPost} alt="Post 1" className="w-full object-cover" />
        <div className="m-5">
          <div className="my-5 px-3">
            <h2 className="py-2 text-xl">
              Room for Change: Interior Design that Adapts with Style
            </h2>
            <p className="text-sm ">
              Interior design trends are evolving towards sustainability,
              biophilia, and flexibility. Designers are using natural materials
              and soft colors to create calming and inspiring spaces that
              enhance well-being.
            </p>
          </div>
          <hr />
          <div className="flex px-3">
            <div className="p-2">
              <Like className="cursor-pointer size-5" />
              <p className="flex justify-center">51</p>
            </div>
            <div className="p-2">
              <Comment className="cursor-pointer size-5" />
              <p className="flex justify-center">12</p>
            </div>
            <div className="p-2">
              <Share className="cursor-pointer size-5" />
              <p className="flex justify-center">7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10 border rounded-3xl shadow overflow-hidden">
        <img src={FirstPost} alt="Post 1" className="w-full object-cover" />
        <div className="m-5">
          <h2 className="">Title</h2>
          <p>Description</p>
          <div className="flex p-3">
            <div className="p-2">
              <Like className="cursor-pointer size-5" />
              <p className="flex justify-center">51</p>
            </div>
            <div className="p-2">
              <Comment className="cursor-pointer size-5" />
              <p className="flex justify-center">12</p>
            </div>
            <div className="p-2">
              <Share className="cursor-pointer size-5" />
              <p className="flex justify-center">7</p>
            </div>
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
