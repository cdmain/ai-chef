import { useState } from "react"
import IngredientList from "./IngredientList"
import Recipe from "./Recipe"

export default function Main() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(null);

    // Updates ingredients list when user enters a new ingredient (using form data)
    function addIngredients(formData) {
        
        const newIngredient = formData.get("ingredient")
        
        // Do not allow empty strings to be added to the ingredients list
        if (newIngredient !== "")
            setIngredients(prevIngredientsList => [...prevIngredientsList, newIngredient])
    }

    // Send ingredients API to get the recipe from the AI model
    async function fetchRecipe() {
        const response = await fetch("https://openai-chef-backend.jordansewpershad.workers.dev/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: ingredients }),
        });

        const data = await response.json();
        console.log("API Response:", data);

        if (data.recipe) {
            setRecipe(data.recipe);
        } else {
            setRecipe("No recipe generated. Try again.");
        }
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

            { ingredients.length > 0 && <IngredientList fetchRecipe={fetchRecipe} ingredientList={ingredients} />}

            {recipe && <Recipe markdownRecipe={recipe} />}
        </main>
    )
}