import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const InstuctionsModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>{buttonLabel}Instructions</Button>
      <Modal top width="100%" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><h1>Welcome</h1></ModalHeader>
        <ModalBody>
        <Col md={12}>
      Welcome/Instructions
    </Col>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default InstuctionsModal;