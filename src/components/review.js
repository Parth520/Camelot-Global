import React, { useState } from "react";
import "../index.css";


const ReviewSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        review: "",
        rating: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Review submitted:", formData);
        alert("Thank you for your review!");
        setFormData({ name: "", email: "", review: "", rating: "" });
    };

    return ( <
        section className = "review-section " >

        <
        h2 className = "review-title" > SHARE YOUR REVIEW < /h2> <
        div className = "review-underline" > < /div> <
        p className = "review-subtitle" >
        We’ d love to hear from you— your feedback makes Camelot Global stronger. <
        /p> 

        <
        form className = "review-form"
        onSubmit = { handleSubmit } >
        <
        label > Full Name < /label> <
        input type = "text"
        name = "name"
        placeholder = "Enter your name"
        value = { formData.name }
        onChange = { handleChange }
        required /
        >



        <
        label > Email < /label> <
        input type = "email"
        name = "email"
        placeholder = "Enter your email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >



        <
        label > Your Review < /label> <
        textarea name = "review"
        placeholder = "Write your review here..."
        rows = "4"
        value = { formData.review }
        onChange = { handleChange }
        required >


        <
        /textarea>

        <
        label > Rating < /label> <
        select name = "rating"
        value = { formData.rating }
        onChange = { handleChange }
        required >
        <
        option value = "" > Choose... < /option> <
        option value = "5" > ⭐⭐⭐⭐⭐-Excellent < /option> <
        option value = "4" > ⭐⭐⭐⭐-Good < /option> <
        option value = "3" > ⭐⭐⭐-Average < /option> <
        option value = "2" > ⭐⭐-Poor < /option> <
        option value = "1" > ⭐-Terrible < /option> < /
        select >

        <
        button type = "submit"
        className = "submit-btn" >
        SUBMIT REVIEW <
        /button> < /
        form > < /
        section >
    );
};

export default ReviewSection;