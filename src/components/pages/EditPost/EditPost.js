import React from 'react';
import styles from './EditPost.module.scss';
import EditPostForm from '../../features/EditPostForm/EditPostForm';

const EditPost = () => {
  return (
    <div className={styles.EditPost}>
      <div className={styles.wrapper}>
        <h1>EditPost Post</h1>
        <EditPostForm />
      </div>
    </div>
  );
};

export default EditPost;
