import {ADD_USER,ADD_CONTACT} from './action.js';

// REDUCERS

export const userReducer =(state = {},action)=>{
	if(action.type === ADD_USER) return {...state,...action.payload}
	else return state;
}
export const contactReducer = (state= [],action)=>{
	if(action.type === ADD_CONTACT) return [...state,action.payload];
	else return state;
}