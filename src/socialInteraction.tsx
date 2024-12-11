import Like from "./iconComponenets/heart";
import Comment from "./iconComponenets/Comment";
import Share from "./iconComponenets/Share";

const SocialInteraction = () => {
  return (
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
  );
};

export default SocialInteraction;
