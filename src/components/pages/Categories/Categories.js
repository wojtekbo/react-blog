import React from 'react';
import styles from './Categories.module.scss';
import ListGroup from 'react-bootstrap/ListGroup';
import {useSelector} from 'react-redux';
import {getAllCategories} from '../../../redux/categoriesRedux';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Categories = () => {
  const categories = useSelector((state) => getAllCategories(state));
  return (
    <div className={styles.Categories}>
      <h1>Categories</h1>
      <ListGroup className={styles.ListGroup}>
        {categories.map((category) => (
          <ListGroup.Item key={category.toLowerCase()}>
            <Nav.Link as={NavLink} to={`/categories/${category}`}>
              {category}
            </Nav.Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Categories;
