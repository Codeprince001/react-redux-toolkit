import './App.css';
import AddPostForm from './features/post/AddPostForm';
import PostList from './features/post/PostList';

function App() {

  return (
  <main className='App'>
    <PostList/>
    <AddPostForm/>
  </main>
  );
}

export default App;
