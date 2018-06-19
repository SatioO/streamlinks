import { createStore, applyMiddleware, compose } from "redux";
import { injectClient } from "./middlewares";
import reducer from "./reducers";
import thunk from "redux-thunk";

export const configureStore = (client, preloadedState) => {
    const finalCreateStore = compose(
        applyMiddleware(injectClient(client), thunk),
        typeof window !== "undefined" && window.devToolsExtension
            ? window.devToolsExtension()
            : f => f
    )(createStore);

    return finalCreateStore(reducer, preloadedState);
};
