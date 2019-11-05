import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MangaView from './mangaview';
import ReviewModal from '../reviews/reviewmodal';
import ReviewIndex from '../reviews/reviewindex';
import ReviewProfileIndex from '../reviews/reviewprofileindex';

const ProfileModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>{buttonLabel}My Reviews</Button>
      <Modal top width="100%" isOpen={modal} toggle={toggle} className={className}>
        {/* <ModalHeader toggle={toggle}><h1>MyProfile(Return Username?)</h1></ModalHeader> */}
        <ModalBody>
        <Col md={12}>
      <ReviewProfileIndex token={props.token}/>
    </Col>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProfileModal;