import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostID: null,
    error: false,
    loading: true
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
        this.setState({ loading: false })
      })
      .catch(error => {
        this.setState({ error: true });
        this.setState({ loading: false })
      });
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedPostID: id });
  }
  render() {
    let posts = <p>Something went Wrong!!!</p>
    if (!this.state.error && !this.state.loading) {
      posts = this.state.posts.map(post =>
        <Link to={'/' + post.id} key={post.id}>
          <Post clicked={() => this.postSelectedHandler(post.id)} key={post.id} title={post.title} author={post.author} />
        </Link>
      )
    }
    if(this.state.loading) {
      posts = <p>Loading...</p>
    }
    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}
export default Posts;