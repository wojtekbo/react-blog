import React from 'react';
import PostForm from '../PostForm/PostForm';
import {useDispatch} from 'react-redux';
import {addPost} from '../../../redux/postsRedux';
import {useNavigate} from 'react-router-dom';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (post) => {
    dispatch(addPost(post));
    navigate('/');
  };

  return <PostForm action={handleClick} actionText="Add post" />;
};

export default AddPostForm;
