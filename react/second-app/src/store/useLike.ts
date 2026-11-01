import { create } from "zustand";

type UseLikeType = {
    likeList: {
        id: number;
        title: string;
    }[];
    toggleLike: (postId: number, title: string) => void;
    clearAll: () => void;
};

const useLike = create<UseLikeType>()((set, get) => {
    return {
        likeList: [],

        toggleLike: (postId, title) => {
            const posts = get().likeList;
            if (posts.some((p) => p.id === postId)) {
                const newPosts = posts.filter((p) => p.id !== postId);
                set((prevState) => ({ ...prevState, likeList: newPosts }));
            } else {
                set((prevState) => ({
                    ...prevState,
                    likeList: [
                        ...prevState.likeList,
                        {
                            id: postId,
                            title: title,
                        },
                    ],
                }));
            }
        },

        clearAll: () => {
            set((prevState) => ({
                ...prevState,
                likeList: [],
            }));
        },
    };
});

export default useLike;
