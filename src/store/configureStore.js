import { createStore } from 'redux';
import reducers from './slices';

export let store = createStore(reducers);
