import { Link, NavLink, Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <header className="bg-sky-500 px-6 py-4">
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
                </nav>
            </header>
            <main className="border-2 border-gray-500 rounded-md p-4 m-4">
                <Outlet />
            </main>
        </>
    );
}
