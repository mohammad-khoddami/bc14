import LikeButton from "@/components/like-button";
import fetchPostList from "@/lib/post-list";
import PostType from "@/types/PostType";
import React from "react";

export default async function ServerPostPage() {
    const postList = await fetchPostList();

    return (
        <div>
            {postList.map((post) => (
                <div key={post.id} className="flex gap-6">
                    <p>{post.title}</p>
                    <LikeButton />
                </div>
            ))}
        </div>
    );
}
