import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ourstore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default ourstore;




// import { createStore, compose, applyMiddleware  } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const ourstore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export default ourstore;
