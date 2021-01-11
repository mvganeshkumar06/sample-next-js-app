import { Button, Typography } from '@material-ui/core';
import Navbar from "./navbar.js";
import styles from "../styles/home.module.css";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Navbar />
      <div id={styles.container}>
        <Typography variant="h4">Welcome to the home page.</Typography>
        <Typography variant="body1">This page is pre rendered during build time</Typography>
        <Link href="/posts"><Button color="secondary" >Go to posts</Button></Link>
      </div>
    </div>
  );
}

export default Home;