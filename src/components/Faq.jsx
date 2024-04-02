import React, {useState} from 'react';
import '../index.css';


export function Accordion() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    const faqs = [
        {
            question: "What is WeCare?",
            answer: "We Care is a web platform designed to connect donors with recipients for various types of donations, including food, stationary, clothes, and other essentials.",
        },
        {
            question: "How can I donate on We Care?",
            answer: "To donate on We Care, you can browse through the available donation listings on the platform and select the items you wish to donate. Follow the prompts to submit your donation, and it will be made available for recipients to request.",
        },
        {
            question: "Are monetary donations accepted on We Care?",
            answer: "At this time, We Care primarily facilitates in-kind donations of goods rather than monetary donations. However, we may explore options for monetary donations in the future to further support our mission.",
        },
        {
            question: "Is there a fee for using We Care?",
            answer: "No, We Care is completely free to use for both donors and recipients. Our goal is to facilitate donations and support those in need without any additional costs or fees.",
        }
    ];

    return (
        <div className="accordion ">
            {faqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                        <h2>{faq.question}</h2>
                        <span>{expandedIndex === index ? '-' : '+'}</span>
                    </div>
                    {expandedIndex === index && (
                        <div className="accordion-content">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}


const Faq = () => {
    return (<>
        <div className="grid grid-cols-5 p-12 m-3 rounded-xl">
            <p></p>
            <h1 className='text-[#FF7918] font-bold text-l md:text-2xl text-center'>Frequently Asked Questions</h1>

            <div className="col-span-2 ]">
                <Accordion></Accordion>

               
            </div>
        </div>
        <br></br>
    </>



    );
};

export default Faq;
