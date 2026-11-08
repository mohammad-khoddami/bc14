import PostType from "@/types/PostType";

async function fetchPostList() {
    const response = await fetch("https://dummyjson.com/posts", {
        cache: "force-cache",
        next: {
            revalidate: 5,
        },
    });
    const result: PostType = await response.json();
    const postList = result.posts;

    return postList;
}

export default fetchPostList;
