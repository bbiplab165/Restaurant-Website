import { createContext, useState } from 'react';
import Navigation from '../Navigation/Navigation'
import Style from "./Home.module.css"

export const data = createContext();

function Home() {
    const foodItems = [
        {
            id: 0,
            name: "Pizza",
            description: "Delicious pepperoni pizza with mozzarella cheese.",
            price: 12.99,
        },
        {
            id: 1,
            name: "Burger",
            description: "Classic beef burger with lettuce, tomatoes, and cheese.",
            price: 8.49,
        },
        {
            id: 2,
            name: "Spaghetti Carbonara",
            description: "Creamy pasta with bacon and Parmesan cheese.",
            price: 10.99,
        },
        {
            id: 3,
            name: "Salad",
            description: "Fresh garden salad with mixed greens and balsamic dressing.",
            price: 6.99,
        }
    ];


    const [cart, setCart] = useState([])
    const [amount, setAmount] = useState(0);

    function handleAdd(i) {
        const itemWithAmount = { ...i, amount };
        setCart(previous => [...previous, itemWithAmount]);
    }


    return (
        <div className={Style.main}>
            <data.Provider value={cart}>
                <Navigation />
            </data.Provider>
            <div className={Style.foodItems}>
                {foodItems.map((i, index) => (
                    <div key={index} className={Style.map} >
                        <div className={Style.items} onClick={() => handleOpen(i)}>
                            <h4>{i.name}</h4>
                            <h4>{i.description}</h4>
                            <h4>$ {i.price}</h4>
                        </div>
                        <div className={Style.amount}>
                            <div className={Style.count}>
                                <label>Amount</label>
                                <input type='number' onChange={(e)=>setAmount(e.target.value)}/>
                            </div>
                            <button onClick={() => handleAdd(i)}>+ Add</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home