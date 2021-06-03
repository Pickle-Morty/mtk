import React from "react";
import './modal.css';
import CloseImg from './img/times-solid.svg'

const Modal = (props) => {
    return (
        <div className={props.show ? "modal active" : "modal"}>
            <div className="modal__content">
                <div className="modal__close" onClick={() => props.setShow(false)}><img src={CloseImg} alt="X" class = "close__icon"/></div>
                <p>
                    {props.children}
                   
                </p>
            </div>
        </div>
    )
}

export default Modal;


