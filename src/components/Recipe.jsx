import React, { useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';

export default function Recipe({ markdownRecipe }, ref) {
    const recipeRef = useRef(null)

    useEffect(() => {
        if (recipeRef.current) {
            setTimeout(() => {
                recipeRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [markdownRecipe]);

    return (
        <pre className="suggested-recipe-container" ref={recipeRef} >
            <h2>AI Chef Recommends:</h2>
            <ReactMarkdown>{markdownRecipe}</ReactMarkdown>
        </pre>
    );
}
