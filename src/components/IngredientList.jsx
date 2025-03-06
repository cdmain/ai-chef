export default function IngredientsList(props) {
    
    // Maps over the ingredients list and wraps each element with list item tags <li>...</li>
    const ingredientsListItems = props.ingredientList.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    async function fetchRecipe() {
        const response = await fetch("https://ai-chef-backend.jordansewpershad.workers.dev", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: props.ingredientList })
        });
    
        const recipeMarkdown = await response.text();
        console.log(recipeMarkdown);
    }
    
    
    return (
        <section className="ingredients-container">
        
            <div className="ingredients-list-container">
                <h2 className="ingredients-list-heading">Ingredients on hand:</h2>
                <ul className="ingredients-list">
                    {ingredientsListItems}
                </ul>
            </div>

            { props.ingredientList.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3 className="get-recipe-heading">Ready for a recipe?</h3>
                    <p className="get-recipe-explaination">Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.fetchRecipe} className="get-recipe-button">Get a recipe</button>                    
            </div>}
        </section>
    )
}