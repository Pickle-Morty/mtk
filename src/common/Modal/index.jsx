import React from "react";
import './modal.css';

const Modal = (props) => {
    return (
        <div className={props.show ? "modal active" : "modal"}>
            <div className="modal__content">
                <div className="modal__close" onClick={() => props.setShow(false)}>x</div>
                <p>
                    {props.children}
                </p>
            </div>
        </div>
    )
}

export default Modal;


