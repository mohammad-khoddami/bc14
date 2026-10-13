export default function Layout({ children, text }) {
    return (
        <>
            <header className="h-20 bg-sky-200">
                <h1>{text}</h1>
            </header>
            <main className="px-10">{children}</main>
            <footer className="h-20 bg-sky-200"></footer>
        </>
    );
}
