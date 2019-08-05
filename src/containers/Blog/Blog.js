import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';

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
        {/* <section>
          <FullPost id={this.state.selectedPostID} />
        </section>
        <section>
          <NewPost />
        </section> */}
        <Posts />
      </div>
    );
  }
}

export default Blog;