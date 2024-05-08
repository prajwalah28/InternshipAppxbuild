import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import './Faq.css';

function FaqItem({ item, isOpen, toggleFaq }) {
    return (
        <li>
            <div className="question">
                <h4 onClick={toggleFaq}>
                    {item.question} <div className="plus">{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                </h4>
                {isOpen && <div>{item.content}</div>}
            </div>
        </li>
    );
}

export default FaqItem;
