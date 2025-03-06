import ReactMarkdown from 'react-markdown';

export default function Recipe({ markdownRecipe }) {
    return (
        <section className="recipe-container">
        <h2 className="recipe-heading">Recipe:</h2>
        <div className="recipe-content">
            <ReactMarkdown>{markdownRecipe}</ReactMarkdown>
        </div>
    </section>
    );
}
