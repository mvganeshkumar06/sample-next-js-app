import Link from "next/link";
import { Button } from "@material-ui/core";
import styles from "../styles/navbar.module.css";

function Navbar() {

    return (
        <div id={styles.navContainer}>
            <ul id={styles.nav}>
                <li className={styles.link}>
                    <Link href="/"><Button color="primary">Home</Button></Link>
                </li>
                <li className={styles.link}>
                    <Link href="/posts" ><Button color="primary">Posts</Button></Link>
                </li>
            </ul>
        </div>
    );

}

export default Navbar;