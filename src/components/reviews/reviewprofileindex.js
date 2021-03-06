import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReviewCreate from './reviewcreate';
import ReviewTable from './reviewtable';
import ReviewEdit from './reviewedit';
import APIURL from '../../helpers/environment';

const ReviewProfileIndex = (props) => {
    const [reviews, setReviews] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState({});

    const fetchReviews = () => {
        fetch(`${APIURL}/manga/review`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
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
                {/* <Col md="12">
                    <ReviewCreate fetchReviews={fetchReviews} token={props.token}/>
                </Col> */}
                </Row>
                <Row>
                <Col md="12">
                    <ReviewTable reviews={reviews} editUpdateReview={editUpdateReview} updateOn={updateOn} fetchReviews={fetchReviews} token={props.token}/>
                </Col>
                {updateActive ? <ReviewEdit reviewToUpdate={reviewToUpdate} updateOff={updateOff} token={props.token} fetchReviews={fetchReviews}/> : <></>}
            </Row>
        </Container>
    )
}

export default ReviewProfileIndex;