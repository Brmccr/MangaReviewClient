import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../../helpers/environment';

const ReviewCreateBerserk = (props) => {
    const [rating, setRating] = useState('');
    const [paragraph, setParagraph] = useState('');
    // const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(rating, paragraph)
        fetch(`${APIURL}/manga/reviewberserk`, {
            method:'POST',
            body: JSON.stringify({rating: rating, paragraph: paragraph}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((reviewData) => {
            console.log(reviewData);
            setRating('');
            setParagraph('');
            props.fetchReviews();
        })
    }
    return(
        <>
        <h3>Write a Review For Berserk</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="rating"/>
                <h3>Rate 1-5</h3>
                <Input type="select" name ="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="paragraph"/>
                <h3>Share Your Opinion</h3>
                <Input name="paragraph" value={paragraph} onChange={(e) => setParagraph(e.target.value)}>
                </Input>
            </FormGroup>
            <Button type="submit">Submit Review</Button>
        </Form>
        </>
    )
}

export default ReviewCreateBerserk;