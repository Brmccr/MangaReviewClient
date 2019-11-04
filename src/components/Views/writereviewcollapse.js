import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import ReviewIndex from '../reviews/reviewindex';

const WriteReviewCollapse = (props) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Reviews</Button> */}
      <Button color="primary" onClick={toggle} size="lg" block>Review Collapse - Write A Review</Button>
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
          <ReviewIndex token={props.token}/>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default WriteReviewCollapse;