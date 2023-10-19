import { useState } from 'react';
import Navigation from '../Navigation/Navigation'
import Style from "./Home.module.css"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: '15px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

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


    const [open, setOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [foodItemCounts, setFoodItemCounts] = useState(foodItems.map(() => 0));

    function handleCount(id) {
        const newCounts = [...foodItemCounts];
        newCounts[id] += 1;
        setFoodItemCounts(newCounts);
    }

    const handleOpen = (foodItem) => {
        console.log(foodItem);
        setSelectedFood(foodItem);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={Style.main}>
            <Navigation />
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
                                <h3>{foodItemCounts[index]}</h3>
                            </div>
                            <button onClick={() => handleCount(i.id)}>+ Add</button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {selectedFood && (
                        <div className={Style.desc}>
                            <h3>{selectedFood.name}</h3>
                            <p>Total <span>$ {foodItemCounts[selectedFood.id] * selectedFood.price} </span> </p>
                        </div>
                    )}
                    <div className={Style.modalButtons}>
                        <button onClick={handleClose}>Close</button>
                        <button>Order</button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Home