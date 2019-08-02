import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostID: null,
    error: false
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Syed Shahiq"
          }
          // Appended author in response
        });
        this.setState({ posts: updatedPosts });
        // console.log(response);
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedPostID: id });
  }
  render() {
    let posts = <p>Something went Wrong!!!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post =>
        <Post clicked={() => this.postSelectedHandler(post.id)} key={post.id} title={post.title} author={post.author} />
      )
    }
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostID} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;