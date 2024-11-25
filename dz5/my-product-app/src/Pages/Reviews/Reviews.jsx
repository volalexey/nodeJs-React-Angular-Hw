import {ListReviews} from "../../components/WebsiteReviews/listReviews";
import {NavLink} from "react-router-dom";
import {ReviewsProvider} from "../../context/Reviews/ReviewsContext";

export const Reviews = () =>{
    return (
        <ReviewsProvider>
            <div>
                <h1>Our Website reviews</h1>
                <ListReviews/>
                <NavLink to={'/'}>Home</NavLink>
            </div>
        </ReviewsProvider>
    )
}