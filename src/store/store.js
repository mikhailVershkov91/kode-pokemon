import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import pokemonsReducer from './pokemonsReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

let reducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  pokemons: pokemonsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

window.__store__ = store;


export default store;