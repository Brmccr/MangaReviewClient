
const ReviewListTable = (props) => {
    const [reviewslist, setReviewsList] = useState([]);

    const getReviews = () => {
        fetch('http://localhost:3000/manga/allreview', {
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


const reviewListMapper = () => {
    return props.reviewslist.map((reviewlist, index) => {
        return(
            <tr key={index}>
                <th scope="row">{reviewlist.id}</th>
                {/* <td>{props.owner.id}</td> */}
                <td>{reviewlist.rating}</td>
                <td>{reviewlist.paragraph}</td>
                <td>
                </td>
            </tr>
        )
    })
}
return(
    <>
    <h3>Reviews</h3>
    <hr/>
    <Table striped>
        <thead>
            <tr>
                <th>Username</th>
                <th>Rating</th>
                <th>Paragraph</th>
            </tr>
        </thead>
        <tbody>
            {reviewListMapper()}
        </tbody>
    </Table>
    </>
)
}

export default ReviewListTable;