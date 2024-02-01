import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    comments: [],
    loading: false,
    error: null,
  };
  componentDidMount = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/:commentId`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYjZhNzViMjYxNTAwMTk4YTY5OWUiLCJpYXQiOjE3MDY4MDA4MDgsImV4cCI6MTcwODAxMDQwOH0.KQQOyUOb6QP3aJ5a9dxHhSoispm5xE17AQ-hVHr9btg',
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data);
        this.setState({ comments: data, loading: false });
      } else {
        console.log('Error loading comments');
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      this.setState({ error, loading: false });
    }
  };

  // render qui

  render() {
    const { loading, error, comments } = this.state;

    return (
      <>
        {error && <p>Error fetching data: {error.message}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : comments.length > 0 ? (
          <div
            style={{ height: '200px', marginTop: '1rem', overflowY: 'scroll' }}
          >
            <ListGroup variant="flush" style={{}}>
              <CommentList comments={comments} />
            </ListGroup>
            <AddComment id={this.props.id} addComment={this.addComment} />
          </div>
        ) : (
          <p>No comments available</p>
        )}
      </>
    );
  }
}

export default CommentArea;
