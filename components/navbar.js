import Link from "next/link";
import classes from './navbar.module.css';

export default function Navbar(){
    return <>
        <nav className = {classes.nav}>
            <Link href = '/'>HOME</Link>
            <Link href = '/addTopic'>Add Topic</Link>
        </nav>
    </>
}