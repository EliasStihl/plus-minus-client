import { combineReducers } from 'redux';
import playerReducer from './playerReducer'; 

const rootReducer = combineReducers({
    playerReducer, 
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
