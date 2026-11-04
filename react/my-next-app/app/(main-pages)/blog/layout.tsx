import Link from "next/link";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="bg-gray-500 px-6 py-4 flex gap-6">
                <Link href="/blog/blog1">Blog 1</Link>
                <Link href="/blog/blog2">Blog 2</Link>
                <Link href="/blog/blog3">Blog 3</Link>
            </div>
            <div>{children}</div>
        </div>
    );
}
