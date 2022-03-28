import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {getAllCategories} from '../../../redux/categoriesRedux';

const PostForm = ({action, actionText, ...props}) => {
  const {
    register,
    handleSubmit: validate,
    formState: {errors},
  } = useForm();
  const categories = useSelector((state) => getAllCategories(state));
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [category, setCategorie] = useState(props.category || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [publishedDateError, setPublishedDateError] = useState(false);

  const onSubmit = () => {
    setContentError(!content);
    setPublishedDateError(!publishedDate);
    if (publishedDate && content) {
      action({title, author, category, publishedDate, shortDescription, content});
    }
  };

  return (
    <Form onSubmit={validate(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control {...register('title', {required: true, minLength: 3})} value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title" />
        {errors.title && <small className="d-block form-text text-danger mt-1">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control {...register('author', {required: true, minLength: 3})} value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Enter author" />
        {errors.author && <small className="d-block form-text text-danger mt-1">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} dateFormat="yyyy-MM-dd" />
        {publishedDateError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          {...register('category', {required: true})}
          onChange={(e) => {
            setCategorie(e.target.value);
          }}
          aria-label="Default select example"
        >
          <option></option>
          {categories.map((category) => (
            <option key={category.toLowerCase()} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
        {errors.category && <small className="d-block form-text text-danger mt-1">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        {/* <Form.Control as="textarea" rows={3} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} /> */}
        <Form.Control
          {...register('shortDescription', {required: true, minLength: 20})}
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          type="text"
          placeholder="Enter author"
        />
        {errors.shortDescription && <small className="d-block form-text text-danger mt-1">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
