import React from 'react';
import {Table, Button} from 'reactstrap';
import { userInfo } from 'os';

const ReviewTableBerserk = (props) => {

    const deleteReview = (review) => {
        fetch(`http://localhost:3000/manga/${review.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchReviews())
    }

    const reviewMapper = () => {
        return props.reviews.map((review, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{review.mangaTitle}</th>
                    {/* <td>{props.owner.id}</td> */}
                    <td>{review.rating}</td>
                    <td>{review.paragraph}</td>
                    <td style={{
                        display: 'flex',
                        position: 'relative'
                    }}>
                        <Button color="primary" onClick={() => {props.editUpdateReview(review); props.updateOn()}}>Update</Button>
                        <Button color="secondary" onClick={() => {deleteReview(review)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>Review History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>MangaName</th>
                    <th>Rating</th>
                    <th>Paragraph</th>
                </tr>
            </thead>
            <tbody>
                {reviewMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default ReviewTableBerserk;