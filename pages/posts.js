import { Button, Card, CardContent, Typography } from '@material-ui/core';
import Navbar from "./navbar.js";
import styles from "../styles/posts.module.css";

function Posts(props) {

    const data = props.data.slice(0, 10);

    return (
        <div id={styles.postsContainer}>
            <Navbar />
            <Typography variant="subtitle1">This page is being pre rendered after fetching data from an api by the server on each request</Typography>
            <a href="https://jsonplaceholder.typicode.com/posts" target="_blank"><Button color="secondary">Checkout the api here</Button></a>
            {data.map((post) => {
                return (
                    <Card id={styles.container} key={post.id}>
                        <CardContent>
                            <Typography variant="h4">{post.title}</Typography>
                            <Typography variant="body1">{post.body}</Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}

export async function getServerSideProps() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            data
        }
    };
}

export default Posts;