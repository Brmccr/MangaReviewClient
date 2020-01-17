import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReviewCreateSoulEater from '../SoulEaterManga/reviewcreateSoulEater';


const ReviewModalSoulEater = (props) => {
    console.log(props)
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{
        marginBottom: '.2em',
        marginTop : '.2em'
      }}color="primary" onClick={toggle} size="lg" block>Write A Review</Button>
      <Modal top width="100%" isOpen={modal} toggle={toggle} className={className}>
        {/* <ModalHeader toggle={toggle}>Write A Review</ModalHeader> */}
        <ModalBody>
        <ReviewCreateSoulEater token={props.token}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ReviewModalSoulEater;