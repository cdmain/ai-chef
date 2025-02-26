import { useState } from "react"

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        
        if (newIngredient !== "")
            setIngredients(prevIngredientsList => [...prevIngredientsList, newIngredient])
    }

    return (
        <main className="page">
            <form action={addIngredients} className="add-ingredient-form">
                <input 
                    className="ingredient-input" 
                    aria-label="Add ingredient"
                    type="text" 
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button className="add-ingredient-button">Add ingredient</button>
            </form>

            {ingredients.length > 0 && <section className="ingredients-container">
                
                <div className="ingredients-list-container">
                    <h2 className="ingredients-list-heading">Ingredients on hand:</h2>
                    <ul className="ingredients-list">
                        {ingredientsListItems}
                    </ul>
                </div>

                <div className="get-recipe-container">
                    <div>
                        <h3 className="get-recipe-heading">Ready for a recipe?</h3>
                        <p className="get-recipe-explaination">Generate a recipe from you list of ingredients.</p>
                    </div>
                    <button className="get-recipe-button">Get a recipe</button>                    
                </div>

            </section>}
        </main>
    )
}