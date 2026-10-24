import { useEffect, useState } from "react";

type PostItem = {
    id: number;
    title: string;
    body: string;
    tags: string[];
};

type Post = {
    posts: PostItem[];
    total: number;
    skip: number;
    limit: number;
};

export default function PostListPage() {
    const [postList, setPostList] = useState<PostItem[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const resp = await fetch("https://dummyjson.com/posts");
                const result: Post = await resp.json();
                setPostList(result.posts);
            } catch {
                console.log("Error");
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {postList.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    );
}
