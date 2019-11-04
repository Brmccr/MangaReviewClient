import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReviewCreateBerserk from './reviewcreateberserk';
import ReviewTableBerserk from './reviewtableberserk';


const ReviewIndexBerserk = (props) => {
    const [reviews, setReviews] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState({});

    const fetchReviews = () => {
        fetch('http://localhost:3000/manga/reviewberserk', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                // 'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((reviewData) => {
            setReviews(reviewData)
            console.log(reviewData)
        })
    }

    //

    const editUpdateReview = (review) => {
        setReviewToUpdate(review);
        console.log(review);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchReviews();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="12">
                    <ReviewCreateBerserk fetchReviews={fetchReviews} token={props.token}/>
                </Col>
                </Row>
                <Row>
                <Col md="12">
                    {/* <ReviewTableBerserk reviews={reviews} fetchReviews={fetchReviews} token={props.token}/> */}
                </Col>
                {/* {updateActive ? <ReviewEdit reviewToUpdate={reviewToUpdate} updateOff={updateOff} token={props.token} fetchReviews={fetchReviews}/> : <></>} */}
            </Row>
        </Container>
    )
}

export default ReviewIndexBerserk;