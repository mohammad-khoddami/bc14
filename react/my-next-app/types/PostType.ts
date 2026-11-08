import PostItemType from "./PostItemType";

type PostType = {
    posts: PostItemType[];
    total: number;
    skip: number;
    limit: number;
};

export default PostType;
