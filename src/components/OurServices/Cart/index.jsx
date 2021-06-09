import React from "react";
import CartImg from "./image/1.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import "./Cart.css";



const Cart = (props) => {
    const showContent = () => {
        props.setShow(true);
        props.setContent(props.index)
    }
    return (
        <div
            className={props.blue ? "ourServices__Cart blue" : " ourServices__Cart"}
            onClick={showContent}
        >
            <ScrollAnimation
                animateIn="animate__fadeInDown"
                animateOnce="true"
                delay={500}
            >
                <img className="cartImg" src={props.path} />
                <div className="cartFilter"></div>
                <div className="cartContent">
                    <p className="cartText">{props.title}</p>
                </div>


            </ScrollAnimation>
        </div>
    )
}

export default Cart;