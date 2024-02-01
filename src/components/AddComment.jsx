import { Component } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.asin, 
    },
  };

  yourComment = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYjZhNzViMjYxNTAwMTk4YTY5OWUiLCJpYXQiOjE3MDY4MDA4MDgsImV4cCI6MTcwODAxMDQwOH0.KQQOyUOb6QP3aJ5a9dxHhSoispm5xE17AQ-hVHr9btg",
        },
      });
      if (response.ok) {
        alert("Successfully submitted, thank you for your review!");
        this.setState({
          comment: {
            comment: "",
            rate: 1,
            elementId: this.props.asin,
          },
        });
      } else {
        throw new Error("Ops! Something didn't quite work there");
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.yourComment}>
          <FormGroup className="mb-2">
            <Form.Label>Add your review</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write something..."
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </FormGroup>

          <FormGroup className="mb-2">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </FormGroup>
          <Button variant="primary" type="submit">
            Send Comment
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;