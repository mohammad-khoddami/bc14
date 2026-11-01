import React, { useEffect, useState } from "react";
import type { Post, PostItem } from "../post/postListPage";
import usePostList from "../../hooks/usePostList";

export default function PostDesign2() {
    const { isLoading, postList } = usePostList();

    return (
        <div className="flex gap-4">
            {isLoading ? (
                <p>Loading ... </p>
            ) : (
                <>
                    <div>
                        {postList.map((post) => (
                            <div key={post.id} className="flex justify-between">
                                <p>{post.title}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
