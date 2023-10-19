import { useContext, useState, useEffect } from "react"
import Style from "./Navigation.module.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { data } from "../Home/Home";

const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function Navigation() {
    const cart = useContext(data)

    const [count, setCount] = useState(cart.length)
    const [open, setOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState([]);
    const [total, setTotal] = useState(0)

    function totalCost(cart) {
        let sum = 0
        cart.forEach((item) => {
            const amount = item.amount;
            const price = item.price;
            sum += amount * price;
        });
        setTotal(sum)
    }

    const handleOpen = () => {
        console.log(cart);
        totalCost(cart)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setCount(cart.length);
        setSelectedFood(cart)
    }, [cart]);

    function handleDecrement(id) {
        const updatedSelectedFood = [...selectedFood]; // Create a copy of the selectedFood array
        if (updatedSelectedFood[id].amount > 0) {
            updatedSelectedFood[id].amount--; // Decrement the amount
            setSelectedFood(updatedSelectedFood); // Update the state
        }
        totalCost(selectedFood)
    }
    function handleIncrement(id) {
        const updatedSelectedFood = [...selectedFood]; // Create a copy of the selectedFood array
        updatedSelectedFood[id].amount++; // Increment the amount
        setSelectedFood(updatedSelectedFood);
        totalCost(selectedFood)
    }

    return (
        <div className={Style.main}>
            <h2>ReactMeals</h2>
            <button onClick={handleOpen}><img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_1280.png" />Your Cart <span> {count} </span></button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={Style.desc}>
                        {selectedFood && selectedFood.map((i) => (
                            <div key={i.id} className={Style.item}>
                                <div className={Style.right}>
                                    <h3>{i.name}</h3>
                                    <p>{i.amount}</p>
                                    <h4>$ {i.price}</h4>
                                </div>
                                <div className={Style.button}>
                                    <button onClick={() => handleDecrement(i.id)}>-</button>
                                    <button onClick={() => handleIncrement(i.id)}>+</button>
                                </div>
                            </div>
                        ))}
                        <p>Total Amount <span>$ {total}</span></p>
                        <div className={Style.modalButtons}>
                            <button onClick={handleClose}>Close</button>
                            <button>Order</button>
                        </div>
                    </div>
                </Box>
            </Modal>

        </div>
    )
}

export default Navigation