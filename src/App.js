import React from "react";

import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import PostList from './pages/PostList';
import PostDetail from "./pages/PostDetail";
import PostWrite from "./pages/PostWrite";

function App() {

  return (
    <React.Fragment>
        <BrowserRouter>
          <Route path="/" exact component={PostList} />
          <Route path="/detail" exact component={PostDetail} />
          <Route path="/detail/:idx" exact component={PostDetail} />
          <Route path="/write" exact component={PostWrite} />
        </BrowserRouter>
    </React.Fragment>
  );
}


export default App;
