import { Button, Typography } from '@material-ui/core';
import styles from "../styles/home.module.css";
import Link from "next/link";

function Home() {
  return (
    <div>
      <div id={styles.container}>
        <Typography variant="h4">Welcome to the home page.</Typography>
        <Link href="/tutor"><Button color="secondary" >Check our tutors</Button></Link>
      </div>
    </div>
  );
}

export default Home;