import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../helpers/environment';

const ReviewEditBerserk = (props) => {
    const {
        buttonLabel,
        className
      } = props;

    const [editRating, setEditRating] = useState(props.reviewToUpdate.rating);
    const [editPar, setEditPar] = useState(props.reviewToUpdate.paragraph);

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);


    const reviewUpdate = (event, review) => {
        event.preventDefault();
        fetch(`${APIURL}/manga/${props.reviewToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({review: {rating: editRating, paragraph: editPar}}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            })
            }) .then((res) => {
            props.fetchReviews();
            props.updateOff();
        })
    }
return(
    <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader onClick={toggle}>Write a Review</ModalHeader>
        <ModalBody>
            <Form onSubmit={reviewUpdate}>
                <FormGroup>
                    <Label htmlFor="rating">Edit Rating:</Label>
                    <Input name="rating" value={editRating} onChange={(e) => setEditRating(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="paragraph">Edit Paragraph</Label>
                    <Input name="paragraph" value={editPar} onChange={(e) => setEditPar(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Update Review!</Button>
                <Button color="secondary" onClick={toggle}>Close</Button>
            </Form>
        </ModalBody>
    </Modal>
)
}

export default ReviewEditBerserk;