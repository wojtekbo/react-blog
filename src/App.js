import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import Add from './components/pages/Add/Add';
import Edit from './components/pages/Edit/Edit';
import About from './components/pages/About/About';
import NoMatch from './components/pages/NoMatch/NoMatch';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import {Container} from 'react-bootstrap';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post/add" element={<Add />} />
          <Route path="/post/edit/:postId" element={<Edit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
