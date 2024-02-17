import React, {useState} from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import {formatdate} from "../../utils/formatDate.js";
import './Feedback.css'
import {AiFillStar} from "react-icons/ai";
import FeedbackForm from "./FeedbackForm.jsx";

function Feedback(props) {
    const [showFeedback, setShowFeedback] = useState(false);
    return (
        <>
            <div className="feedback">
                <h3>All Reviews (272)</h3>
            </div>
            <div className="comment">
                <div>
                    <figure>
                        <img src={avatar}/>
                    </figure>
                </div>
                <div className="flexstar">
                    <div>
                        <h4>Ali Ahmed <br/>
                            <span>{formatdate('03-12-2008')}</span></h4>
                        <p>Good Services Highly recommended</p>
                    </div>
                    <div className="sitare">
                        {[...Array(5).keys()].map((_, index) => <AiFillStar key={index}/>)}
                    </div>
                </div>
            </div>

            <div className="feed-button">
                <button onClick={() => {
                    setShowFeedback(true)
                }}>Give Feedback
                </button>
            </div>

            {showFeedback && <FeedbackForm/>}
        </>
    );
}

export default Feedback;
