import '../css/Ingredient.css'

const Ingredient = ({ ingredient }) => {

    return (
        <li className='Ingredient'>
            {ingredient}
        </li>
    )
}

export default Ingredient;