import ReactMarkdown from 'react-markdown';

export default function Recipe({ markdownRecipe }) {
    return (
        <section className="suggested-recipe-container">
            <h2>AI Chef Recommends:</h2>
            <ReactMarkdown>{markdownRecipe}</ReactMarkdown>
        </section>
    );
}
