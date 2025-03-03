import { useState } from "react"
import IngredientsList from "./IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = useState([])

    // Updates ingredients list when user enters a new ingredient (using form data)
    function addIngredients(formData) {
        
        const newIngredient = formData.get("ingredient")
        
        // Do not allow empty strings to be added to the ingredients list
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

            { ingredients.length > 0 && <IngredientsList ingredientList={ingredients} />}
        </main>
    )
}