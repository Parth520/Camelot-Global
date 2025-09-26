import { useEffect, useRef, useState } from "react";
import "./index.css"; // add styles here

export default function RevealOnScroll({ children }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            }, { threshold: 0.6 } // how much should be visible before trigger
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return ( <
        div ref = { ref }
        className = { `reveal ${visible ? "visible" : ""}` } > { children } <
        /div>
    );
}