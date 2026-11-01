import { useEffect, useState } from "react";
import type { Post, PostItem } from "../pages/post/postListPage";

const usePostList = () => {
    const [postList, setPostList] = useState<PostItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const resp = await fetch("https://dummyjson.com/posts");
                const result: Post = await resp.json();
                setPostList(result.posts);
            } catch {
                console.log("Error");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return {
        postList,
        isLoading,
    };
};

export default usePostList;
