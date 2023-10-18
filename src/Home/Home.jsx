import Navigation from '../Navigation/Navigation'
import Style from "./Home.module.css"

function Home(){
    const foodItems = [
        {
          name: "Pizza",
          description: "Delicious pepperoni pizza with mozzarella cheese.",
          price: 12.99,
        },
        {
          name: "Burger",
          description: "Classic beef burger with lettuce, tomatoes, and cheese.",
          price: 8.49,
        },
        {
          name: "Spaghetti Carbonara",
          description: "Creamy pasta with bacon and Parmesan cheese.",
          price: 10.99,
        },
        {
          name: "Salad",
          description: "Fresh garden salad with mixed greens and balsamic dressing.",
          price: 6.99,
        }
      ];
      
    return(
        <div>
            <Navigation/>
            <div className={Style.foodItems}>
                {foodItems.map((i)=>(
                    <div className={Style.items}>
                        <h4>{i.name}</h4>
                        <h4>{i.description}</h4>
                        <h4>$ {i.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home