import { createStore } from 'redux';
import reducer from '../features/counter/reducers'
 const store = createStore(reducer);

 export default store