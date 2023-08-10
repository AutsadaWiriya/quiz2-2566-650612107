"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner userName="Autsada Wiriya" studentId="650612107" post="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" numLike="100" myimg="/profileImages/Profile.jpg"/>

        {/* Comment Example */}
        {
          comments.map( comment => 
            <Comment userImagePath={comment.userImagePath} username={comment.username} likeNum={comment.likeNum} commentText={comment.commentText} replies={comment.replies} key={comment.id}/>
          )
        }

        {/* Reply Example */}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
