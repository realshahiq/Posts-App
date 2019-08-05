import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <Posts />} />
        <Route path="/" render={() => <h1>This is Routing</h1>} />
        {/* <section>
          <FullPost id={this.state.selectedPostID} />
        </section>
        <section>
          <NewPost />
        </section> */}
        {/* <Posts /> */}
      </div>
    );
  }
}

export default Blog;