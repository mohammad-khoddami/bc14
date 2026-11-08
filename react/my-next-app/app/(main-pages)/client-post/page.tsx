"use client";

import PostItemType from "@/types/PostItemType";
import PostType from "@/types/PostType";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ClientPostPage() {
    const [postList, setPostList] = useState<PostItemType[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch("https://dummyjson.com/posts");
            const result: PostType = await response.json();
            setPostList(result.posts);
        };

        getPosts();
    }, []);

    function handleClick() {
        console.log("clicked");
    }

    return (
        <div>
            <p>Post Page</p>
            {postList.map((post) => (
                <div key={post.id} className="flex gap-6">
                    <p>{post.title}</p>
                    <button
                        className="border rounded-sm px-2"
                        onClick={handleClick}
                    >
                        Like
                    </button>
                </div>
            ))}
            {/* <Image
                src="/headphone.jpg"
                alt="headphone"
                width={200}
                height={200}
            /> */}
        </div>
    );
}
