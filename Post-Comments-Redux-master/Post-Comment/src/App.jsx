import './App.css'
import { Provider } from "react-redux";

import store from './app/store';
import PostList from './features/posts/PostList';
import CommentList from './features/comments/CommentList';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
        <CommentList />
      </div>
    </Provider>
  );
}

export default App
