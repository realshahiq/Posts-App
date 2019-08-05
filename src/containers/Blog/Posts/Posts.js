import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostID: null,
    error: false
  }
  componentDidMount() {
    axios.get('/posts')
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
        <Link to={'/' + post.id} key={post.id}>
          <Post clicked={() => this.postSelectedHandler(post.id)} key={post.id} title={post.title} author={post.author} />
        </Link>
      )
    }
    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}
export default Posts;