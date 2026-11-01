import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import ThemeContext from "../context/themeContext";
import useLike from "../store/useLike";
import LikedPosts from "./liked-posts";

export default function Layout() {
    const { theme, setTheme } = useContext(ThemeContext);

    const { likeList } = useLike();

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <header className="bg-sky-500 px-6 py-4 flex justify-between">
                <nav className="flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            return isActive ? "text-white border-b-2" : "";
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/post-list"
                        className={({ isActive }) =>
                            isActive ? "text-white border-b-2" : ""
                        }
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        to="/built-in-hook"
                        className={({ isActive }) =>
                            isActive ? "text-white border-b-2" : ""
                        }
                    >
                        BuiltIn Hooks
                    </NavLink>
                    <NavLink
                        to="/post-design-2"
                        className={({ isActive }) =>
                            isActive ? "text-white border-b-2" : ""
                        }
                    >
                        Post Design 2
                    </NavLink>
                </nav>
                <div className="flex gap-8">
                    <div
                        className="relative"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <span className="pr-5">Likes</span>
                        <span className="bg-red-500 text-white px-2 rounded-xl absolute bottom-[-8px] right-0">
                            {likeList.length}
                        </span>
                        {isHover && likeList.length > 0 && (
                            <div className="w-80 shadow-md rounded-md h-50 bg-white absolute right-0 top-6 overflow-auto">
                                <LikedPosts />
                            </div>
                        )}
                    </div>

                    <button
                        className="border rounded-sm"
                        onClick={() =>
                            setTheme(theme === "light" ? "dark" : "light")
                        }
                    >
                        {theme === "light" ? "light" : "dark"}
                    </button>
                </div>
            </header>
            <main className="border-2 border-gray-500 rounded-md p-4 m-4">
                <Outlet />
            </main>
        </>
    );
}
