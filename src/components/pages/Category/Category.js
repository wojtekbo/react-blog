import React from 'react';
import PostsList from '../../features/PostsList/PostsList';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import {getPostByCategory} from '../../../redux/postsRedux';
import styles from './Category.module.scss';

const Category = () => {
  const {category} = useParams();
  const posts = useSelector((state) => getPostByCategory(state, category));

  return (
    <div className={styles.Category}>
      <h1>{category}</h1>
      {posts.length === 0 ? <h4>Brak postów w tej kategorii</h4> : <PostsList posts={posts} />}
    </div>
  );
};

export default Category;
