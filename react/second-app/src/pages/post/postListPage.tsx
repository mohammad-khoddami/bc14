import { useContext } from "react";
import { Link, Outlet } from "react-router";
import ThemeContext from "../../context/themeContext";
import useLike from "../../store/useLike";
import usePostList from "../../hooks/usePostList";

export type PostItem = {
    id: number;
    title: string;
    body: string;
    tags: string[];
};

export type Post = {
    posts: PostItem[];
    total: number;
    skip: number;
    limit: number;
};

export default function PostListPage() {
    // const [postList, setPostList] = useState<PostItem[]>([]);
    // const [isLoading, setIsLoading] = useState(true);

    const { isLoading, postList } = usePostList();

    const { theme } = useContext(ThemeContext);

    const { likeList, toggleLike } = useLike();

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const resp = await fetch("https://dummyjson.com/posts");
    //             const result: Post = await resp.json();
    //             setPostList(result.posts);
    //         } catch {
    //             console.log("Error");
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchPosts();
    // }, []);

    function handleLike(post: PostItem) {
        toggleLike(post.id, post.title);
    }

    return (
        <div className="flex gap-4">
            {isLoading ? (
                <p>Loading ... </p>
            ) : (
                <>
                    <aside className="border rounded-md p-4 w-[30%]">
                        {postList.map((post) => (
                            <div key={post.id} className="flex justify-between">
                                <Link
                                    to={`${post.id}`}
                                    className="block hover:text-blue-700"
                                >
                                    {post.title}
                                </Link>
                                <button
                                    className={`border rounded-sm cursor-pointer ${likeList.find((p) => p.id === post.id) ? "bg-red-500" : "bg-white"}`}
                                    onClick={() => handleLike(post)}
                                >
                                    Like
                                </button>
                            </div>
                        ))}
                    </aside>
                    <section
                        className={`${theme === "dark" ? "bg-black" : " bg-white"} border rounded-md p-4 w-[70%]`}
                    >
                        <Outlet />
                    </section>
                </>
            )}
        </div>
    );
}
