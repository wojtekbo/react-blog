const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Nam beatae repellat est dolor',
      content: 'Main content of the article',
      publishedDate: new Date('2022.01.01'),
      author: 'John Doe',
      category: 'News',
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Et mollitia animi qui eligendi dolorem in sapiente illo id eligendi dolores sit dolorem repellat.',
      publishedDate: new Date('2022.01.01'),
      author: 'John Doe',
      category: 'Sport',
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2022.01.01'),
      author: 'John Doe',
      category: 'Sport',
    },
    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('2022.01.01'),
      author: 'John Doe',
      category: 'Movies',
    },
  ],
  categories: ['Movies', 'Sport', 'News'],
};

export default initialState;
