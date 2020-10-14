import React from 'react'
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';//il provider wrappa tutti i componenti che utilizzeranno lo store
import {Button, Text, View, StyleSheet} from 'react-native';
import {addUser,addContact} from './action.js';
import {userReducer,contactReducer} from './reducers.js';
import ContactList from './contactList';
import AddContact from './addContact';

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#fffdd1'
	}
})

const reducer = combineReducers({
	user: userReducer,
	contacts: contactReducer,
})
export const store = createStore(reducer);

export default class newApp extends React.Component{
	render(){
		return(
			<View style = {styles.container}>
				<Provider store={store} > 
					<ContactList />
					<AddContact/>
				</Provider>
			</View>
			);
	}
}