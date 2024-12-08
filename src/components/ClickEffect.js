import React, { useEffect } from "react";
import "./ClickEffect.css"; // Add styles in a separate CSS file

const ClickEffect = () => {
    useEffect(() => {
        const handleClick = (e) => {
            // Create the click effect element
            const effect = document.createElement("div");
            effect.className = "click-effect";
            effect.style.left = `${e.pageX - 10}px`;
            effect.style.top = `${e.pageY - 10}px`;

            // Append the effect to the body
            document.body.appendChild(effect);

            // Remove the effect after animation
            setTimeout(() => {
                effect.remove();
            }, 400);
        };

        // Attach the click event listener
        document.addEventListener("click", handleClick);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return null; // No UI needed for this component
};

export default ClickEffect;
