import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewModal from '../reviews/reviewmodal';
import Example from './mangaimgcarousel';
import './mangamodal.css';
import ReviewCollapse from './mangareviewcollapse';
import WriteReviewCollapse from '../Views/writereviewcollapse';
import DeadmanWonderlandCarousel from './DeadmanWonderlandcarousel'

const DeadmanWonderlandModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>{buttonLabel}Read More</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><h1>Deadman Wonderland</h1></ModalHeader>
        <ModalBody>
        <Col md={12}>
      <Card>
      <DeadmanWonderlandCarousel style={{
            height: '15em',
            width: 'auto'
        }} />
        {/* <CardImg top width="100%" src="https://www.rightstufanime.com/images/productImages/9781591164050_manga-Neon-Genesis-Evangelion-7-sample3.jpg" alt="Berserk" /> */}
        <CardBody>
          {/* <CardTitle><h5>Berserk</h5></CardTitle> */}
          <CardText><h3>Background</h3></CardText>
          <CardText>It looked like it would be a normal day for Ganta Igarashi and his classmates—they were preparing to go on a class field trip to a certain prison amusement park called Deadman Wonderland, where the convicts perform dangerous acts for the onlookers' amusement. However, Ganta's life is quickly turned upside down when his whole class gets massacred by a mysterious man in red. Framed for the incident and sentenced to death, Ganta is sent to the very jail he was supposed to visit.
<br></br>
<br></br>
But Ganta's nightmare is only just beginning.
<br></br>
<br></br>
The young protagonist is thrown into a world of sadistic inmates and enigmatic powers, to live in constant fear of the lethal collar placed around his neck that is slowed only by winning in the prison's deathly games. Ganta must bet his life to survive in a ruthless place where it isn't always easy to tell friend from foe, all while trying to find the mysterious "Red Man" and clear his name, in Deadman Wonderland.</CardText>
          {/* <ReviewModal token={props.token}/>
          <Button color="primary">Reviews</Button>
          <Button color="secondary" onClick={toggle}>Close</Button> */}
        </CardBody>
      </Card>
    </Col>
    <Col>
    <ReviewCollapse/>
    <WriteReviewCollapse token={props.token}/>
        {/* <ReviewModal token={props.token}/> */}
        <Button color="primary" onClick={toggle} size="lg" block>Close</Button></Col>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeadmanWonderlandModal;