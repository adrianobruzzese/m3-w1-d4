import Card from 'react-bootstrap/Card';

function MyFooter() {
  return (
    <Card className="mt-auto">
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          “What is better? To be born good or to overcome your evil nature through great effort?” 
          </p>
          <footer className="blockquote-footer">
            Paarthurnax
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default MyFooter;
