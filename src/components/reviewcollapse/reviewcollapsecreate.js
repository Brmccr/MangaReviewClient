import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


const ReviewCreate = (props) => {
    const [rating, setRating] = useState('');
    const [paragraph, setParagraph] = useState('');
    // const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(rating, paragraph)
        fetch('http://localhost:3000/manga/review', {
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
        <h3>Write a Review</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="rating"/>
                <Input name ="rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="paragraph"/>
                <Input name="paragraph" value={paragraph} onChange={(e) => setParagraph(e.target.value)}>
                </Input>
            </FormGroup>
            <Button type="submit">Submit Review</Button>
        </Form>
        </>
    )
}

export default ReviewCreate;