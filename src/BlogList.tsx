import FirstPost from "./assets/Salon.jpeg";
import Like from "./iconComponenets/heart";
import Comment from "./iconComponenets/Comment";
import Share from "./iconComponenets/Share";

const BlogList = (props: any) => {
  const blogs = props.blogs;
  //   const title = props.title;
  return (
    <div>
      {blogs.map((blog: any) => (
        <div
          className="m-10 border rounded-3xl shadow overflow-hidden"
          key={blog.id}
        >
          <img src={FirstPost} alt="Post 1" className="w-full object-cover" />
          <div className="mx-5 p-2">
            <div className="text-xs text-slate-500 px-2">
              <p>{blog.author}</p>
              <p>{blog.date}</p>
            </div>
            <h2 className="py-2 text-xl">{blog.title}</h2>
            <p className="text-sm ">{blog.shortDescription}</p>
          </div>

          <hr className="mx-4" />
          <div className="flex mx-2 px-3">
            <div className="p-2">
              <Like className="cursor-pointer size-5" />
              <p className="flex justify-center text-sm">51</p>
            </div>
            <div className="p-2">
              <Comment className="cursor-pointer size-5" />
              <p className="flex justify-center text-sm">12</p>
            </div>
            <div className="p-2">
              <Share className="cursor-pointer size-5" />
              <p className="flex justify-center text-sm">7</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
