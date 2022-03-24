import React from 'react';
import {useSelector} from 'react-redux';
import {getAllPosts} from '../../../redux/postsRedux.js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import dateToStr from '../../../utils/dateToStr';

const PostsList = () => {
  const posts = useSelector((state) => getAllPosts(state));
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post, idx) => (
          <Col key={post.id}>
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
                  {dateToStr(post.publishedDate)}
                </Card.Subtitle>
                <Card.Text>{post.shortDescription}</Card.Text>

                <Nav.Link as={NavLink} to={`/post/${post.id}`}>
                  <Button variant="primary">More</Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PostsList;
