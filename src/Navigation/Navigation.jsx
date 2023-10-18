import { useState } from "react"
import Style from "./Navigation.module.css"

function Navigation(){
    const [count,setCount]=useState(0)
    return(
        <div className={Style.main}>
            <h2>ReactMeals</h2>
            <button><img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_1280.png"/>Your Cart <span> {count} </span></button>
        </div>
    )
}

export default Navigation