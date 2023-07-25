import React, { Fragment } from 'react';
import { Container, Card, CardImg, Button } from 'react-bootstrap';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const Content = () => {
  return (
    <Fragment>
      <Container>
        <div className="row">
          {productsArr.map((product, index) => (
            <div key={index} className="col-md-3">
              <Card>
                <CardImg variant="top" src={product.imageUrl} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <div className="text-center">
        <Button bg='secondary' variant='dark'>See The Cart</Button>
      </div>
    </Fragment>
  );
};

export default Content;
