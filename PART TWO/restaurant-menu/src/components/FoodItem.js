import '../App.css';
const FoodItem = ({foodTitle, price, description, removeFoodItem}) => {
    return (
        <div className="food-card">
            <h5>{foodTitle}</h5>
            <span>{description}</span>
            <h6>#{price}</h6>
            <button onClick={removeFoodItem}>Remove Item</button>
        </div>
    )
}

export default FoodItem;