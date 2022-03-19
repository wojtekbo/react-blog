import React from 'react';
import PostsList from '../../features/PostsList/PostsList';
import styles from './Home.modules.scss';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>All Posts</h1>
        <Button href="/post/Add" variant="outline-primary">
          Add Post
        </Button>
      </div>
      <PostsList />
    </div>
  );
};

export default Home;
