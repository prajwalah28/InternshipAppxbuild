import React from 'react';
import {faqs} from "../../assets/data/faqs.js";
import FaqItem from "./FaqItem.jsx";

function Faqlist(props) {
    return (
        <ul>
            {faqs.map((item, index) => (
                <FaqItem key={index} item={item}/>
            ))}
        </ul>
    );
}

export default Faqlist;
