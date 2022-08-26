import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import imageCheck from './assets/images/chicken.png';
import food1 from './assets/images/food-card1.png'
import food2 from './assets/images/food-card2.png'
import food3 from './assets/images/food-card3.png'
import food4 from './assets/images/food-card4.png'
import food5 from './assets/images/food-card5.png'
import food6 from './assets/images/food-card6.png'
import test from './assets/images/test_1.png'
import chatIcon from './assets/images/chat-icon.png'

function App() {
  const foodItems = [
    {
      image: food1,
      foodTitle: 'Jollof Rice ad Chicken',
      description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
      amount: '#1500'
    },
    {
      foodTitle: 'Swallow with Draw Soup',
      description: 'Swallow with Draw Soup',
      image: food2,
      amount: '#1000'
    },
    {
      foodTitle: 'Fries with Egg sauce',
      description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
      image: food3,
      amount: '#1500'
    },
    {
      foodTitle: 'Swallow with Egusi Soup',
      description: 'Nicely cooked egusi soup and eba',
      image: food4,
      amount: '#1000'
    },
    {
      foodTitle: 'Beans',
      description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
      image: food5,
      amount: '#700'
    },
    {
      foodTitle: 'Fried Rice',
      description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
      image: food6,
      amount: '#600'
    }
    // {
    //   foodTitle: 'Fried Rice',
    //   description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
    //   image: food6,
    //   amount: '#600'
    // }

  ]

  // const blogItems = [
  //   {
  //     image:'Design',
  //     design-date: 'Design',
  //     description:'Better Than Takeout Kung Pao Chicken',
  //     Note:'This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe ',
  //     link: 'READ MORE'}
  //     {
  //       image:
  //       design-date:,
  //       description:
  //       Note:
  //       link:},
  //       {
  //         image:
  //         design-date:,
  //         description:
  //         Note:
  //         link:}

  // ]

  console.log(imageCheck, 'img');
  return (
    <div className="App">
      <header className="App-header">
      <div className='header-main'>
          <img src='data:image/png;base64,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' alt='logo' />
          <h5>Admin Dashboard</h5>
        
          <button className='create'>Create Account</button>
        </div>
{/*   
      <nav className="navigation">
      <a href="/" className="brand-name">
        MacroSoft
      </a>
      
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

    </nav> */}
    
        {/* <nav>
        <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Home 
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Meal plans
        </a>
      </li>
      
    </ul>
        </nav> */}

      </header>
      {/* <Header/> */}
      <div className='main-page'>
        <div className='landing-page'>
          <div className='del-meals'>
            <div className='convenience'> 
              <h5>Delicious meals at your convenience</h5>
              <h6>Order your meals from us and we will have it delivered to your door step.</h6>
              <button className='get-started'>Get Started</button>
            </div>


          </div>
          <div className='circle-wrapper'>
            <div className='circle'>
              <img src={"/static/media/chicken.c9f61fa39e0b3d194304.png"} alt='meal' />
            </div>

            <div className='chat'>
              <img src={chatIcon} alt='chat'/>
            </div>

          </div>
        </div>
        <div className='menu'>
          {/* <div>
            <div>Current menu</div>
            <div>
            </div>
          </div> */}
          {foodItems.map((foodItem) => {
            return (
              <div className='food-card'>
               <img src={foodItem.image}/>
                <h5>{foodItem.foodTitle}</h5>
                <h6>{foodItem.description}</h6>
                <h6> {foodItem.amount}</h6>
                </div>
            )
          })}
        </div>
        
        <div className='testimonials'>
          <div className='customer'>
            <h5 className='cust-1'>What our customers say about us</h5>
              <h6 className='cust-2'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</h6></div>
          <div className='testimony'>
            <div className='test_1'>
              <img src={test}/>
              <h2><center> John Samson</center></h2>
              <p><center>ENUGU NIGERIA</center></p>
            </div>
            <p className='test_2'>White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter concept of the number one permanence.</p>
          </div>
        </div>
        <div className='blog'>
            <h4 className='blog_title1'><center>Blog Our Latest News</center></h4>
            <p className='blog_title2'><center>Have you ever browsed food blogs like mine and wondered how to start a food blog of your very own? </center> </p>
            <div className='blog-title'>
          </div>
          
        </div>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default App;
