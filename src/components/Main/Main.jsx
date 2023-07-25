import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const Main = () => {
  return (
    <Fragment>
      <div className='mt-3'>
        <Card bg='secondary'>
          <Card.Body className='display-1 text-white text-center'>The Generics</Card.Body>
        </Card>
      </div>
    </Fragment>
  );
};

export default Main;
