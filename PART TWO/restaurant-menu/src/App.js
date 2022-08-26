
import { useState } from 'react';
import './App.css';
import FoodItem from './components/FoodItem';
import { generateUUID } from './utils';
import logo from './assets/icons/logo-bg.png';

const foodItemInitialState = {
  title: '',
  description: '',
  price: ''
}
function App() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodItem, setFoodItem] = useState(foodItemInitialState);


  const addFoodItem = () => {
    setFoodItems((previousState) => ([...previousState, {
      id: generateUUID(),
      title: foodItem.title,
      description: foodItem.description,
      price: foodItem.price

    }]));
    setFoodItem({
      title: '',
      description: '',
      price: ''
    })
  };

  const handleFoodItemChange = (e) => {
    const { name, value } = e.target;
    setFoodItem((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  const removeFoodItem = (id) => {
    const filteredFoodItems = foodItems.filter((foodItem) => foodItem.id !== id);
    setFoodItems(filteredFoodItems);
  }
  console.log(logo, 'logo');
  const { title, description, price } = foodItem;
  return (
    <div className="App">
      <header className="app-header">
        <div className='header-main'>
          <img src='data:image/png;base64,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' alt='logo' />
          <h5>Admin Dashboard</h5>
        </div>
  
      </header>
      <div className='main'>
      <div className='food-item'>
        <label htmlFor='title'>
          <h3>Food</h3>
          <input type={'text'} name='title' value={title} onChange={handleFoodItemChange} />

        </label>
        <label htmlFor='description'>
          <h3>Description</h3>
          <textarea typeof='text' name='description' value={description} onChange={handleFoodItemChange} />
        </label>
        <label htmlFor='price'>
          <h3> Price</h3>
          <input type={'text'} name='price' value={price} onChange={handleFoodItemChange} />
        </label>
        <button onClick={addFoodItem} className='add-food-item'>Add</button>
      </div>
     
      <div className='menu-wrapper'>

        <h2>Menu</h2>
        <div className='menu'>
        {foodItems.map(({ id, title, description, price }) => {
          return (
            <FoodItem
              key={id}
              foodTitle={title}
              description={description}
              price={price}
              removeFoodItem={() => removeFoodItem(id)}
            />
          )
        })}
        </div>
       

      </div>
      </div>
      
    </div>
  );
}

export default App;
