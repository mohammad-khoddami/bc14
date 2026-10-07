export default function Layout({ children }) {
    return (
        <>
            <header className="h-20 bg-sky-200"></header>
            <main className="px-10">{children}</main>
            <footer className="h-20 bg-sky-200"></footer>
        </>
    );
}
