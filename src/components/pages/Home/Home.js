import React from 'react';
import PostsList from '../../features/PostsList/PostsList';
import styles from './Home.module.scss';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>All Posts</h1>

        <Nav.Link as={NavLink} to={`/post/Add`}>
          <Button variant="outline-primary">Add Post</Button>
        </Nav.Link>
      </div>
      <PostsList />
    </div>
  );
};

export default Home;
