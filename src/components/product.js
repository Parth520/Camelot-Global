import React from "react";
import '../index.css';
import RevealOnScroll from "../RevealOnScroll";

const ProductSection = () => {
    const cards = [{
            title: "Crowd Wisdom",
            text: "Get reading insights powered by a global community.",
        },
        {
            title: "Lovable Mascot",
            text: "A companion that makes reading warm and personal.",
        },
        {
            title: "On-the-Go",
            text: "Lightweight design built for readers who travel or move often.",
        },
        {
            title: "Faithful Experience",
            text: "Technology that puts trust and loyalty at its heart.",
        },
    ];

    return ( <
        section className = "product-section  " > { /* Title */ } <
        div className = "product-header" >
        <
        RevealOnScroll > <
        h2 className = "product-title" > Our Product < /h2> <
        div className = "underline" > < /div> <
        p className = "subtitle" >
        Technology that makes reading faithful, friendly, and luxurious. <
        /p> </RevealOnScroll > < /
        div >
        <
        RevealOnScroll >
        <
        div className = "product-grid  " > { /* Left Image */ }

        <
        div className = "form-container  " >
        <
        h2 className = "form-title" > Pre - Order the Camelot Reader < /h2> <
        form className = "preorder-form" > { /* Full Name */ } <
        label className = "form-label" > Full Name < /label> <
        input type = "text"
        className = "form-input"
        placeholder = "Enter your full name" / >

        { /* Email */ } <
        label className = "form-label " > Email < /label> <
        input type = "email"
        className = "form-input"
        placeholder = "Enter your email" / >

        { /* Shipping Address */ } <
        label className = "form-label" > Shipping Address < /label> <
        textarea className = "form-textarea"
        placeholder = "Enter your shipping address" > < /textarea>

        { /* Quantity */ } <
        label className = "form-label" > Quantity < /label> <
        input type = "number"
        min = "1"
        defaultValue = "1"
        className = "form-input" / >

        { /* Submit Button */ } <
        button type = "submit"
        className = "submit-btn" > Submit Pre - Order < /button> < /
        form > <
        /div>

        { /* Right Content */ } <
        div className = "content" >
        <
        h3 className = "content-title" > The Camelot Reader < /h3> <
        p className = "content-text" >
        A revolutionary < span className = "highlight" > portable device < /span>{" "}
        that brings books to life with { " " } <
        span className = "highlight" > crowd - sourced insights < /span> and the
        charm of our mascot.Designed
        for those who live alone, it’ s more than a device— it’ s a companion. <
        /p>

        { /* Cards */ } <
        div className = "card-grid" > {
            cards.map((card, index) => ( <
                div key = { index }
                className = "card" >
                <
                h4 className = "card-title" > { card.title } < /h4> <
                p className = "card-text" > { card.text } < /p> < /
                div >
            ))
        } <
        /div> < /
        div > <
        /div></RevealOnScroll > < /
        section >
    );
};

export default ProductSection;