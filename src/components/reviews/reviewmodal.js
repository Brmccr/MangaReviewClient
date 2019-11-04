import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewIndex from './reviewindex';
import ReviewCreate from './reviewcreate';
import ReviewEdit from './reviewedit';


const ReviewModal = (props) => {
    console.log(props)
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} size="lg" block>Write A Review</Button>
      <Modal top width="100%" isOpen={modal} toggle={toggle} className={className}>
        {/* <ModalHeader toggle={toggle}>Write A Review</ModalHeader> */}
        <ModalBody>
        <ReviewIndex token={props.token}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ReviewModal;