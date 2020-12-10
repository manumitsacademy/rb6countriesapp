import {createStore} from 'redux';
import reducer  from './reducer'
var store = new createStore(reducer)
export default store;
