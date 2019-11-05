import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

const DeathNoteReviewTable = (props) => {
    const [mangareviews, setmangaReviews] = useState([]);

const fetchmangaReviews = () => {
    fetch(`${APIURL}/manga/reviewdeathnote`, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
        })
    }).then( (res) => res.json())
    .then((reviewData) => {
        setmangaReviews(reviewData)
        console.log(reviewData)
    })
}

useEffect(() => {
    fetchmangaReviews();
}, [])


const mangareviewMapper = () => {
    return mangareviews.map((manga, index) => {
        return (
            manga.reviews.map((review, index) => (
            <tr key={index}>
                <th scope="row">{review.reviewer}</th>
                {/* <td>{props.owner.id}</td> */}
                <td>{review.rating}</td>
                <td>{review.paragraph}</td>
                <td style={{
                    display: 'flex',
                    position: 'relative'
                }}>
                    {/* <Button color="primary" onClick={() => {props.editUpdateReview(review); props.updateOn()}}>Update</Button>
                    <Button color="secondary" onClick={() => {deleteReview(review)}}>Delete</Button> */}
                </td>
            </tr>
            )
        )
    )})
}

return(
    <>
    <h3>Death Note Reviews</h3>
    <hr/>
    <Table striped>
        <thead>
            <tr>
                <th>Reviewer Name</th>
                <th>Rating</th>
                <th>Review</th>
            </tr>
        </thead>
        <tbody>
            {mangareviewMapper()}
        </tbody>
    </Table>
    </>
)
}

export default DeathNoteReviewTable;