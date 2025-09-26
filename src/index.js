import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import ProductSection from './components/product';
import BlogSelection from './components/blog';
import ReviewSection from './components/review';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    React.StrictMode >
    <
    Nav / >

    <
    /React.StrictMode>
);

const roo = ReactDOM.createRoot(document.getElementById('hero'));
roo.render( < React.StrictMode > < Hero / > < /React.StrictMode>);
        const rao = ReactDOM.createRoot(document.getElementById('about')); rao.render( < React.StrictMode > < About / > < /React.StrictMode>);
            const raam = ReactDOM.createRoot(document.getElementById('product')); raam.render( < React.StrictMode > < ProductSection / > < /React.StrictMode>);
                const raaam = ReactDOM.createRoot(document.getElementById('blog')); raaam.render( < React.StrictMode > < BlogSelection / > < /React.StrictMode>);
                    const raaaam = ReactDOM.createRoot(document.getElementById('review')); raaaam.render( < React.StrictMode > < ReviewSection / > < /React.StrictMode>);
                        // If you want to start measuring performance in your app, pass a function
                        // to log results (for example: reportWebVitals(console.log))
                        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
                        reportWebVitals();