import Link from "next/link";

export const NavBar = () => {
    return <>
        <Link href="/home1" className="nav-link">Home 1</Link>
        <Link href="/home2" className="nav-link">Home 2</Link>
        <Link href="/home3" className="nav-link">Home 3</Link>
    </>
}
