import Image from "next/image";
import React from "react";

export default function PostPage() {
    return (
        <div>
            <p>Post Page</p>
            <Image
                src="/headphone.jpg"
                alt="headphone"
                width={200}
                height={200}
            />
        </div>
    );
}
