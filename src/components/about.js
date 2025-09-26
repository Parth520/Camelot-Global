import React from 'react';
import '../index.css';
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    return ( < RevealOnScroll > <
        section className = "about-section " >
        <
        h1 className = "about-heading" > About Us < /h1> <
        p className = "about-text" >
        At < span className = "glow" > Camelot Global < /span>, we are pioneering new
        ways to experience books.By combining { " " } <
        span className = "glow" > crowd - sourced data < /span> with the warmth of a{" "} <
        span className = "glow" > lovable mascot < /span>, we’ve created a reading
        journey that feels both faithful and personal. <
        /p>

        <
        p className = "about-text" >
        Our flagship product is a { " " } <
        span className = "glow" > portable device < /span> that brings our
        groundbreaking technology to life, allowing you to { " " } <
        span className = "glow" > read together < /span>, wherever you are. Designed
        with those who live alone in mind, our mission is to provide { " " } <
        span className = "glow" > companionship < /span>,{" "} <
        span className = "glow" > trust < /span>, and a shared sense of{" "} <
        span className = "glow" > discovery < /span>. < /
        p >

        <
        p className = "about-text" >
        At our core, < span className = "glow" > Camelot Global < /span> stands for{" "} <
        span className = "glow" > faithfulness < /span> — to our readers, our vision,
        and the timeless power of < span className = "glow" > stories < /span>. < /
        p > <
        /section> </RevealOnScroll >
    );
};

export default About;