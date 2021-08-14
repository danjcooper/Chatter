import React, {useState} from "react";

// components.
import {Nav} from "./Components"
import {LoginPage, ChatPage} from "./Pages"

import styles from "./style.module.css"

const App = () => {

    const [state, setstate] = useState()

    return (
        <>
        <Nav/>
        <h1>I want to be famous</h1>
        {/* <LoginPage /> */}
        <ChatPage />
        </>
    )
}

export default App;