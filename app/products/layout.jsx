export default function Layout({ children }) {
    return <>
        <nav className="nav">Navbar</nav>
        <section className="p-8 flex flex-col gap-4 grow">
            {children}
        </section>
    </>
}
