import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import registerServiceWorker from "./registerServiceWorker";
import { Main } from "./containers";
import { configureStore } from "./store";

const target = document.querySelector("#root");
const store = configureStore(axios, {});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>,
    target
);
registerServiceWorker();
