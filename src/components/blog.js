import React from "react";
import "../index.css";
import RevealOnScroll from '../RevealOnScroll';

const BlogSection = () => {
    const blogPosts = [{
            date: "Sept 10, 2025",
            title: "Why Reading Together Matters",
            desc: "Discover how crowd-sourced insights create richer reading experiences and bring readers closer — even when they’re apart.",
            link: "./whyread.html"
        },
        {
            date: "Aug 22, 2025",
            title: "Meet Our Mascot",
            desc: "Say hello to the lovable character at the heart of Camelot Global — designed to keep you company while you read.",
            link: "./mascot.html"
        },
        {
            date: "July 30, 2025",
            title: "Faithfulness in Technology",
            desc: "Learn how our device builds trust through consistency, loyalty, and a user-first approach.",
            link: "./technology.html"
        }
    ];

    return ( <
        section className = "blog-section " > < RevealOnScroll >

        <
        h2 className = "blog-title" > From Our Blog < /h2> <
        div className = "blog-divider" > < /div> <
        p className = "blog-subtitle" >
        Insights, stories, and updates from Camelot Global. <
        /p> </RevealOnScroll > <
        RevealOnScroll >

        <
        div className = "blog-grid " > {
            blogPosts.map((post, index) => ( <
                div className = "blog-card "
                key = { index } >
                <
                p className = "blog-date" > { post.date } < /p> <
                h3 className = "blog-heading" > { post.title } < /h3> <
                p className = "blog-desc" > { post.desc } < /p> <
                a href = { post.link }
                className = "blog-link" >
                Read More→ <
                /a> < /
                div >
            ))
        } < /div> </RevealOnScroll >
        <
        /
        section >
    );
};

export default BlogSection;