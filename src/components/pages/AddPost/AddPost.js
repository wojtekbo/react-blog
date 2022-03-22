import React from 'react';
import styles from './AddPost.module.scss';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const AddPost = () => {
  return (
    <div className={styles.AddPost}>
      <div className={styles.wrapper}>
        <h1>Add Post</h1>
        <AddPostForm />
      </div>
    </div>
  );
};

export default AddPost;
