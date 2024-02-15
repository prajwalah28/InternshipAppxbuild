import React from 'react';
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import {useState} from "react";
import './Faq.css'

function FaqItem({item}) {
    const [isOpen, setIsOpen] = useState(false);

    function toogleText() {
        setIsOpen(true);
    }
    return (
        <>


        <div className="question">
            <h4 onClick={toogleText}>
                {item.question} <div className="plus">{isOpen ?   <AiOutlineMinus/> : <AiOutlinePlus/>}</div>
            </h4>
            {isOpen && <div>{item.content}</div>}

        </div>
        </>
    );
}

export default FaqItem;
