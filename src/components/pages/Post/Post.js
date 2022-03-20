import React, {useState} from 'react';
import styles from './Post.module.scss';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {getPostById, deletePost} from '../../../redux/postsRedux.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Post = (props) => {
  const dispatch = useDispatch();
  const {postId} = useParams();
  const post = useSelector((state) => getPostById(state, postId));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = () => {
    setShow(false);
    dispatch(deletePost(postId));
  };
  if (!post) return <Navigate to="/" />;
  else
    return (
      <div className={styles.Post}>
        <div className={styles.wrapper}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>{post.title}</h1>
            <div className={styles.buttons}>
              <Button className="mx-2" href={`/post/edit/${post.id}`} variant="outline-info">
                Edit
              </Button>
              <Button className="mx-2" variant="outline-danger" onClick={handleShow}>
                Delete
              </Button>
            </div>
          </div>
          <p className="my-1">
            <span className="fw-bold">Author: </span>
            {post.author}
          </p>
          <p className="my-1">
            <span className="fw-bold">Published: </span>
            {post.publishedDate}
          </p>
          <p className="my-4">{post.content}</p>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleRemove}>
                Remove
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
};

export default Post;
