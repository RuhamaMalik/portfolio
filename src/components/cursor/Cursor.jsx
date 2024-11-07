import React, { useEffect } from 'react';
import './cursor.css'; // Custom CSS

const MouseCursor = () => {
    useEffect(() => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        let mouseX = 0, mouseY = 0;
        let isHovering = false;

        const updateCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorInner.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`; // Align inner cursor
            if (!isHovering) {
                cursorOuter.style.transform = `translate(${mouseX - 16}px, ${mouseY - 16}px)`; // Align outer cursor
            }
        };

        const addHoverClass = () => {
            cursorInner.classList.add("cursor-hover");
            cursorOuter.classList.add("cursor-hover");
            isHovering = true;
        };

        const removeHoverClass = () => {
            cursorInner.classList.remove("cursor-hover");
            cursorOuter.classList.remove("cursor-hover");
            isHovering = false;
        };

        const attachHoverListeners = () => {
            // document.querySelectorAll("a, .nav-link, .cursor-pointer").forEach(el => {
            document.querySelectorAll("NavLink, a, button, .nav-link, .cursor-pointer").forEach(el => {
                el.addEventListener('mouseenter', addHoverClass);
                el.addEventListener('mouseleave', removeHoverClass);
            });
        };

        // Attach event listeners
        window.addEventListener('mousemove', updateCursor);
        attachHoverListeners();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    return (
        <>
            <div className="mouse-cursor cursor-outer" />
            <div className="mouse-cursor cursor-inner" />
        </>
    );
};

export default MouseCursor;
