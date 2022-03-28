import React from 'react';
import PostsList from '../../features/PostsList/PostsList';
import styles from './Home.module.scss';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {useSelector} from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux.js';

const Home = () => {
  const posts = useSelector((state) => getAllPosts(state));
  return (
    <div className={styles.Home}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>All Posts</h1>

        <Nav.Link as={NavLink} to={`/post/Add`}>
          <Button variant="outline-primary">Add Post</Button>
        </Nav.Link>
      </div>
      <PostsList posts={posts} />
    </div>
  );
};

export default Home;
