import { Row, Nav, InputGroup, Form } from "react-bootstrap";
import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container className="px-0">
        <Nav>
          <InputGroup className="col-12 col-lg-6 mx-auto mb-4">
            <Form.Control
              className="border-dark mt-3"
              placeholder="Type to Search Books..."
              onChange={(event) => {
                this.setState({
                  searchQuery: event.target.value,
                });
              }}
            ></Form.Control>
          </InputGroup>
        </Nav>
        <Row className="mx-1 justify-content-center">
          {this.props.FantasyBooks.map((book) => {
            return (
              book.title.toLowerCase().includes(this.state.searchQuery) && (
                <SingleBook key={book.asin} singleBook={book}></SingleBook>
              )
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;