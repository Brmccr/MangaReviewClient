import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';

const MangaReviewTable = (props) => {
    const [mangareviews, setmangaReviews] = useState([]);

const fetchmangaReviews = () => {
    fetch('http://localhost:3000/manga/reviewberserk', {
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
                <th scope="row">{review.mangaTitle}</th>
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
    <h3>Berserk Reviews</h3>
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
            {mangareviewMapper()}
        </tbody>
    </Table>
    </>
)
}

export default MangaReviewTable;