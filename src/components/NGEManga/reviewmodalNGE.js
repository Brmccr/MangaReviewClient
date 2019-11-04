import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewIndexNGE from './reviewindexNGE';


const ReviewModalNGE = (props) => {
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
        <ReviewIndexNGE token={props.token}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ReviewModalNGE;