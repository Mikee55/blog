import Like from "./iconComponenets/heart";
import Comment from "./iconComponenets/Comment";
import Share from "./iconComponenets/Share";
import { useAuth } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
interface SocialInteractionProps {
  postId: any;
}

interface Comment {
  _id: any;
  content: any;
}

const SocialInteraction: React.FC<SocialInteractionProps> = ({ postId }) => {
  const { user, token } = useAuth();
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [commentsCount, setCommentsCount] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        if (!postId || !user) return;

        const response = await fetch(`/api/blogs/${postId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        console.log(postId);

        console.log(user._id);

        const data = await response.json();
        setLikesCount(data.likes.length);
        setIsLiked(data.likes.includes(user._id));
        setCommentsCount(data.comments.length);
        setComments(data.comments as Comment[]);

        console.log(comments);

        localStorage.setItem(
          `comments-${postId}`,
          JSON.stringify(data.comments)
        );
      } catch (error) {
        console.error("Error fetching post", error);
      }
    };
    const storedComments = localStorage.getItem(`comments-${postId}`);

    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments) as Comment[];
        setComments(parsedComments); // Set comments from localStorage
      } catch (error) {
        console.error("Error parsing stored comments:", error);
      }
    }

    // setComments(storedComments);

    fetchLikes();

    console.log(comments);
    console.log(storedComments);

    // if (postId && user) {

    // }

    // console.log(storedComments);
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
        body: JSON.stringify({ content: commentText }),
      });

      if (!response.ok) {
        throw new Error("Failed to comment");
      }

      const data = await response.json();
      setCommentsCount(data.comments.length);
      setComments(data.comments as Comment[]);

      setCommentText("");
      setShowCommentInput(false);
    } catch (error) {
      console.log("Error to post comment", error);
    }
  };

  return (
    <div>
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
        </div>
        <div className="p-2">
          <Share className="cursor-pointer size-5" />
          <p className="flex justify-center text-sm">7</p>
        </div>
      </div>
      {showCommentInput && (
        <div>
          <div className="p-4 flex flex-col">
            <textarea
              className="w-full border-2 rounded-lg"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              onClick={handleComment}
              className="flex justify-end ml-auto mr-2 mt-2 px-4 rounded-lg text-white bg-sky-700 bg-opacity-80"
            >
              Comment
            </button>
          </div>
        </div>
      )}
      {comments.length > 0 && (
        <div className="mt-2">
          <h4 className="text-sm font-semibold">Comments:</h4>
          <div className="">
            {comments.map((comment) => (
              <p key={comment._id}>{comment.content}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialInteraction;

{
  /* <div className="max-h-40 overflow-y-auto"></div> */
}
