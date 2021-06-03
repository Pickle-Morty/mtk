import React from "react";
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
                <p>{props.title}</p>
            </ScrollAnimation>
        </div>
    )
}

export default Cart;