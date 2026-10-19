import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Layout({ children, text }) {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <>
            <header className="h-20 bg-sky-200">
                <h1>{text}</h1>
                <button
                    className="border rounded-sm cursor-pointer"
                    onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                    }}
                >
                    {theme}
                </button>
            </header>
            <main className="px-10">{children}</main>
            <footer className="h-20 bg-sky-200"></footer>
        </>
    );
}
