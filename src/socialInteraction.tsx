import Like from "./iconComponenets/heart";
import Comment from "./iconComponenets/Comment";
import Share from "./iconComponenets/Share";
import { useAuth } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
interface SocialInteractionProps {
  postId: any;
}

const SocialInteraction: React.FC<SocialInteractionProps> = ({ postId }) => {
  const { user } = useAuth();
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        if (!postId || !user) return;

        const response = await fetch(`/api/blogs/${postId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        console.log(postId);

        const data = await response.json();
        setLikesCount(data.likes.length);
        setIsLiked(data.likes.includes(user._id));
      } catch (error) {
        console.error("Error fetching post", error);
      }
    };

    if (postId && user) {
      fetchLikes();
    }
  }, [postId, user]);

  const handleLike = async () => {
    try {
      if (!user) {
        alert("Please login to like this post");
        return;
      }
      const response = await fetch(`/api/posts/${postId}/like`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(postId);

      if (!response.ok) {
        throw new Error("Failed to like the post");
      }
      const data = await response.json();
      setLikesCount(data.likes.length);
      setIsLiked(!isLiked);
    } catch (error) {
      console.log("Error liking the post", error);
    }
  };

  return (
    <div className="flex mx-2 px-3">
      <div className="p-2">
        <Like
          onClick={handleLike}
          className="cursor-pointer size-5"
          fill={isLiked ? "orange" : "white"}
        />
        <p className="flex justify-center text-sm">{likesCount}</p>
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
