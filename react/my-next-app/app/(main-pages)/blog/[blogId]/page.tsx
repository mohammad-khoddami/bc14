import React from "react";

type SingleBlogType = {
    params: Promise<{ blogId: string }>;
};

export default async function SingleBlogPage({ params }: SingleBlogType) {
    const { blogId } = await params;

    return <div>Single Blog Page: {blogId}</div>;
}
