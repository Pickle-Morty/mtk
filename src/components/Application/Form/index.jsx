import React from "react";


const Form = () => {
    return (
        <div className="form-wrapper"> 
            <form>
                <input type="text" />
                <input type="text" />
                <input type="email" />
                <button type="submit">Оставить заявку</button>
            </form>
            <img className="form-img"/>
        </div>
    )
}
export default Form;