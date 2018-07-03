import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import index from './../redux/reducers/index';
export default function configureStore() {
	return createStore(
		index,
		applyMiddleware(thunk)
	);
}