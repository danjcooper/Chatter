import React from "react";
import styles from "./style.module.css";

const Login =({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Username</label>
                <input id="username" type="text"></input>
                <input type="submit" value="Get Chatting" ></input>
            </form>
        </div>
    )
}

export default Login