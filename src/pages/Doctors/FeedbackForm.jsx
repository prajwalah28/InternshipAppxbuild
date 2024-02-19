import React, {useState} from 'react';
import {AiFillStar} from "react-icons/ai";
import './Feedback.css'

function FeedbackForm(props) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handleSubmitReview = async e => {
        e.preventDefault()
    }
    return (
        <>
            <form className="form">
                <h4>
                    How would you rate your overall experience?
                </h4>

                <div className="rateme">
                    {[...Array(5).keys()].map((_, index) => {
                        index += 1
                        return <button key={index} type={"button"}
                                       className={`${index <= ((rating && hover || hover) ?
                                           "text-yellowColor" : "text-gray-400")}
                                                bg-transparent`}
                                       onClick={() => setRating(index)}
                                       onMouseEnter={() => setHover(index)}
                                       onMouseLeave={() => setHover(rating)}
                                       onDoubleClick={() => {
                                           setHover(0);
                                           setRating(0);
                                       }}>
                            <span>
                                <AiFillStar/>
                            </span>

                        </button>
                    })}
                </div>
                <h4>Share your feedback</h4>
                <div>
                    <textarea placeholder="write your message here..."
                              onChange={e => setReviewText(e.target.value)}></textarea>
                </div>
                <div className="submit">
                    <button type="submit">Submit Feedback</button>
                </div>
            </form>

        </>
    );
}

export default FeedbackForm;
