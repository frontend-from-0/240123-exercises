import './styles.css'
export const RecipeDetail = ({ selected }) => {
    return (
        <div className='detail-container'>
            <h3>Recipe Detail</h3>
            <img src={selected.strMealThumb} alt={selected.strMeal} />
            <h4>{selected.strMeal}</h4>
            <p>{selected.strInstructions}</p>
        </div>

    )
}