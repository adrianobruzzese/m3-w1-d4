import Card from 'react-bootstrap/Card';

function MyJumbotron() {
  return (
    <Card className="bg-image">
      <Card.Body className='card-center'>
        <Card.Title>Welcome to EpiBooks!</Card.Title>
        <Card.Text>
          Here you will find plenty of books!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyJumbotron;