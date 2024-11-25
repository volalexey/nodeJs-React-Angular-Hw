import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const ReviewsContext = createContext();

export const ReviewsProvider = ({children}) => {

    const [reviews, setReviews] = useState([]);

    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:8080/review');
            setReviews(response.data);
        }catch(error){
            console.log(error)
        }
    };

    const addReview = async (review) => {
        try{
            const response = await axios.post('http://localhost:8080/review', {message: review.message, mark: review.mark});
            setReviews((prevReviews) => [...prevReviews, response.data]);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <ReviewsContext.Provider
            value={{reviews, addReview}}>
            {children}
        </ReviewsContext.Provider>
    )
}