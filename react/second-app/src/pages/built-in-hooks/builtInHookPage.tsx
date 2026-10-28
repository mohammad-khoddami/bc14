import React from "react";
import { Link, Outlet } from "react-router";

export default function BuiltInHookPage() {
    return (
        <div className="flex gap-4 h-full">
            <aside className="flex flex-col border rounded-md p-4 w-[30%] h-full">
                <Link to="useRef">useRef</Link>
                <Link to="useMemo">useMemo</Link>
                <Link to="useCallback">useCallback</Link>
            </aside>
            <section className="border rounded-md p-4 w-full h-full">
                <Outlet />
            </section>
        </div>
    );
}
