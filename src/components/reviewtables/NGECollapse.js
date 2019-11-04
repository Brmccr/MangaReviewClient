import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import NGEMangaReviewTable from './NGEreviewtable';;

const NGEReviewCollapse = (props) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Reviews</Button> */}
      <Button color="primary" onClick={toggle} size="lg" block>Reviews</Button>
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
          <NGEMangaReviewTable/>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default NGEReviewCollapse;