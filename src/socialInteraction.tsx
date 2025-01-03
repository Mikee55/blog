import Like from "./iconComponenets/heart";
import Comment from "./iconComponenets/Comment";
import Share from "./iconComponenets/Share";
import { useAuth } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
interface SocialInteractionProps {
  postId: any;
}

const SocialInteraction: React.FC<SocialInteractionProps> = ({ postId }) => {
  const { user, token } = useAuth();
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [commentsCount, setCommentsCount] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        if (!postId || !user) return;

        const response = await fetch(`/api/blogs/${postId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        console.log(postId);
        console.log("reload");
        console.log(user._id);

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
    console.log(isLiked);
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
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(user);
      console.log(token);

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

  const handleComment = async () => {
    try {
      if (!user) {
        alert("Please login to comment");
        return;
      }

      const response = await fetch(`/api/posts/${postId}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to comment");
      }

      const data = await response.json();
      setCommentsCount(data.comments.length);
    } catch (error) {
      console.log("Error to post comment", error);
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
        <Comment
          onClick={() => {
            setShowCommentInput(!showCommentInput);
          }}
          className="cursor-pointer size-5"
        />
        <p className="flex justify-center text-sm">{commentsCount}</p>
        {showCommentInput && (
          <Modal
            show={showCommentInput}
            onClose={() => setShowCommentInput(false)}
          >
            <Modal.Body>
              <div className="p-4">
                <textarea className="w-full" />
                <button>Submit</button>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
      <div className="p-2">
        <Share className="cursor-pointer size-5" />
        <p className="flex justify-center text-sm">7</p>
      </div>
    </div>
  );
};

export default SocialInteraction;
