import React from 'react';
import {useSelector} from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux.js';
import uniqid from 'uniqid';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostsList = () => {
  const posts = useSelector((state) => getAllPosts(state));
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post, idx) => (
          <Col key={uniqid()}>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text></Card.Text>
                <Card.Subtitle className="mb-2">
                  {' '}
                  <span className="fw-bold">Author: </span>
                  {post.author}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2">
                  {' '}
                  <span className="fw-bold">Published: </span>
                  {post.publishedDate}
                </Card.Subtitle>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Button href={`/post/${post.id}`} variant="primary">
                  Primary
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PostsList;
