import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ThemeContext from "../../context/themeContext";
import useLike from "../../store/useLike";

type SinglePost = {
    id: number;
    title: string;
    body: string;
    tags: string[];
};

export default function PostItem() {
    const { theme } = useContext(ThemeContext);
    const { id } = useParams();

    const { likeList, toggleLike } = useLike();

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

    function handleLike(post: SinglePost) {
        toggleLike(post.id, post.title);
    }

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : post ? (
                <>
                    <div className="flex justify-between">
                        <h1
                            className={`${theme === "dark" ? "text-white" : "text-black"} text-xl font-semibold mb-4`}
                        >
                            {post.title}
                        </h1>
                        <button
                            className={`border rounded-sm cursor-pointer ${likeList.find((p) => p.id === post.id) ? "bg-red-500" : "bg-white"}`}
                            onClick={() => handleLike(post)}
                        >
                            Like
                        </button>
                    </div>
                    <p
                        className={`${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                        {post.body}
                    </p>
                </>
            ) : (
                <div>Post Not Found</div>
            )}
        </div>
    );
}
