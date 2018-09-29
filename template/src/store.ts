// import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
//   }
// }

// export interface StoreState {
//   // Default store state goes here
// }

// const rootReducer = combineReducers({
//   // reducers go here
// });

// export default function* rootSaga() {
//   yield all([]); // Sagas go inside this array `...moduleSaga`
// }

// const sagaMiddleware = createSagaMiddleware();

// let store: StoreState;
// let middleware: any = applyMiddleware(sagaMiddleware);

// if (process.env.NODE_ENV === `development`) {
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   middleware = composeEnhancers(middleware);
// }

// store = createStore(rootReducer, applyMiddleware(middleware));

// sagaMiddleware.run(rootSaga);
// export default store;
