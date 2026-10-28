import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

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

    return (
        <div className="flex gap-4">
            {isLoading ? (
                <p>Loading ... </p>
            ) : (
                <div>
                    <aside className="border rounded-md p-4 w-[30%]">
                        {postList.map((post) => (
                            <Link
                                key={post.id}
                                to={`${post.id}`}
                                className="block hover:text-blue-700"
                            >
                                {post.title}
                            </Link>
                        ))}
                    </aside>
                    <section className="border rounded-md p-4 w-full">
                        <Outlet />
                    </section>
                </div>
            )}
        </div>
    );
}
