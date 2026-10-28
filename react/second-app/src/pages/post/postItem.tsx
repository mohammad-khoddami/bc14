import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

type SinglePost = {
    id: number;
    title: string;
    body: string;
    tags: string[];
};

export default function PostItem() {
    const { id } = useParams();

    const [post, setPost] = useState<SinglePost | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        try {
            const getSinglePost = async () => {
                setIsLoading(true);
                const response = await fetch(
                    `https://dummyjson.com/posts/${id}`,
                );
                const result: SinglePost = await response.json();
                setPost(result);
            };

            getSinglePost();
        } catch {
            console.log("Error");
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1 className="text-xl font-semibold mb-4">
                        {post?.title}
                    </h1>
                    <p>{post?.body}</p>
                </>
            )}
        </div>
    );
}
