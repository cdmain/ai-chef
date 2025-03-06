export default function Recipe({ markdownRecipe }) {
    return (
        <section className="recipe-container">
            <h2 className="recipe-heading">Your Recipe</h2>
            <pre className="recipe-content">{markdownRecipe}</pre> {/* Simple preformatted display */}
        </section>
    );
}
