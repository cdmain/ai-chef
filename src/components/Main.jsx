export default function Main() {
    return (
        <main className="page">
            <form className="form">
                <input 
                    className="ingredient-input" 
                    aria-label="Add ingredient"
                    type="text" 
                    placeholder="e.g. oregano" 
                />
                <button className="add-ingredient-button">Add ingredient</button>
            </form>
        </main>
    )
}