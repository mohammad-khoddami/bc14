import React from "react";
import useLike from "../store/useLike";

export default function LikedPosts() {
    const { likeList, toggleLike, clearAll } = useLike();
    return (
        <div className="p-4">
            <button onClick={() => clearAll()}>Clear All</button>
            {likeList.map((post) => (
                <div key={post.id} className="mb-2 flex justify-between">
                    <p>{post.title}</p>
                    <button
                        className={`h-fit border rounded-sm cursor-pointer ${likeList.find((p) => p.id === post.id) ? "bg-red-500" : "bg-white"}`}
                        onClick={() => toggleLike(post.id, post.title)}
                    >
                        Like
                    </button>
                </div>
            ))}
        </div>
    );
}
