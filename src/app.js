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
        {/* <LoginPage /> */}
        <ChatPage />
        </>
    )
}

export default App;