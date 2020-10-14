import React from 'react';
import {Button,View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {addContact} from './action.js';

const styles = StyleSheet.create({
	text:{
		color:'white',
	},
	button:{
		margin:10,
		borderWidth:0.5,
		backgroundColor:'gray',
		width:80,
		height:30,
		alignItems:'center',
		justifyContent:'center',
		borderRadius: 50,
		shadowColor: "#000",
		shadowOffset: {
				width: 0,
				height: 12,
		},
		shadowOpacity: 0.50,
		shadowRadius: 16.00,
		elevation: 15,
	},
	buttonContainer:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	}
})

const AddContact = (props) =>{
	const addOlga=()=>{
		props.addNumber({name:'Olga',phone:'2222-2222-222'})
	}
	const addDiego=()=>{
		props.addNumber({name:'Diego',phone:'111-1111-111'})
	}
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity style={styles.button} onPress={addOlga}>
				<Text style={styles.text}> Add Olga </Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={addDiego} >
				<Text style={styles.text}> Add Diego</Text>
			</TouchableOpacity>	
		</View>
		);
}

export default connect(null,{addNumber:addContact})(AddContact); 
//in questo caso connect sta eseguendo il binding solo con i dispatch. Si crea una props di nome addNumber
//la si assegna all'action creator addContact. Quando viene invocata la props esegue una dispatch allo store
//automaticamente.
//mapDispatchToProps puó essere una funzione (in questo caso in props vi sará anche dispatch con binding 
//su store.dispatch(). Si usa questa forma quando si ha necessitá di piú customizzazione
//la forma consigliata è quella di passare mapDispatchToProps come oggetto con lista di actions creator.
//se si usa la forma chiave:valore, la chiave sará il nome della props. se si usa solo un oggetto, con una
//lista di action creator le props avranno lo stesso nome. Quando si usa la modalitá oggetto, si perde la
//props dispatch.