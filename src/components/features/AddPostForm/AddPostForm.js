import React from 'react';
import styles from './AddPostForm.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addPost} from '../../../redux/postsRedux';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleClick = (e) => {
    dispatch(addPost({title, author, publishedDate, shortDescription, content}));
  };

  return (
    <div className={styles.AddPostForm}>
      <div className={styles.wrapper}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Published</Form.Label>
            <Form.Control type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" rows={3} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Main content</Form.Label>
            <Form.Control as="textarea" rows={10} value={content} onChange={(e) => setContent(e.target.value)} />
          </Form.Group>
          <Nav.Link as={NavLink} to={`/`}>
            <Button variant="primary" onClick={() => handleClick()}>
              Submit
            </Button>
          </Nav.Link>
        </Form>
      </div>
    </div>
  );
};

export default AddPostForm;
