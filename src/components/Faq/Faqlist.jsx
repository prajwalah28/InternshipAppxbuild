import React, { useState } from 'react';
import { faqs } from "../../assets/data/faqs.js";
import FaqItem from "./FaqItem.jsx";

function Faqlist(props) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <ul>
            {faqs.map((item, index) => (
                <FaqItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    toggleFaq={() => toggleFaq(index)}
                />
            ))}
        </ul>
    );
}

export default Faqlist;
