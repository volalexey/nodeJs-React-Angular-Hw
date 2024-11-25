import {useContext, useState} from "react";
import {ReviewsContext} from "../../context/Reviews/ReviewsContext";

export const ListReviews = () =>{

    const {reviews, addReview} = useContext(ReviewsContext);
    const [message, setMessage] = useState('');
    const [mark, setMark] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(message.trim() && mark >= 1 && mark <=5){
            const newReview = {
                message: message,
                mark: mark
            }

            addReview(newReview);
        }
    }
    return(
        <div>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <div>{review.message}</div>
                        <div>{review.mark}</div>
                    </li>
                ))}
            </ul>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="inputMessage">Message</label>
                <input type="text" id={'inputMessage'} value={message}
                       onChange={(e) => setMessage(e.target.value)}/>

                <label htmlFor="inputMark">Mark (1-5)</label>
                <input type="number" id={'inputMessage'} value={mark.toString()}
                       onChange={(e) => setMark(parseInt(e.target.value))}/>

                <button type={"submit"}>Add Review</button>
            </form>
        </div>
    )
}