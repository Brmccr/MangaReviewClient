import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../helpers/environment';


const ReviewEdit = (props) => {

    const [editRating, setEditRating] = useState(props.reviewToUpdate.rating);
    const [editPar, setEditPar] = useState(props.reviewToUpdate.paragraph);



    const reviewUpdate = (event, review) => {
        event.preventDefault();
        fetch(`${APIURL}/manga/${props.reviewToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({rating: editRating, paragraph: editPar}),
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
    <Modal isOpen={true}>
        <ModalHeader>Update a Review</ModalHeader>
        <ModalBody>
            <Form onSubmit={reviewUpdate}>
                <FormGroup>
                    <Label htmlFor="rating">Edit Rating:</Label>
                    <Input type="select" name="rating" value={editRating} onChange={(e) => setEditRating(e.target.value)}>
                    <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </Input>
                    <Label htmlFor="paragraph">Edit Paragraph</Label>
                    <Input name="paragraph" value={editPar} onChange={(e) => setEditPar(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Update Review!</Button>
                {/* <Button color="secondary">Close</Button> */}
            </Form>
        </ModalBody>
    </Modal>
)
}

export default ReviewEdit;