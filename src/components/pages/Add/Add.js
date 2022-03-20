import React from 'react';
import styles from './Add.module.scss';

import AddPostForm from '../../features/AddPostForm/AddPostForm';

const Add = () => {
  return (
    <div className={styles.Add}>
      <div className={styles.wrapper}>
        <h1>Add Post</h1>
        <AddPostForm />
      </div>
    </div>
  );
};

export default Add;
