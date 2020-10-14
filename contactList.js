import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
	container:{
		margin:50,
	}
})

const ContactList = (props) =>{
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text>Name:{props.contact[0]?.name}</Text>
			<Text>Phone:{props.contact[0]?.phone}</Text>
			<Text>Name:{props.contact[1]?.name}</Text>
			<Text>Phone:{props.contact[1]?.phone}</Text>
		</ScrollView>
		)
}
const mapStateToProps=state=>({
	contact: state.contacts
})
export default connect(mapStateToProps)(ContactList);//in questo cosa connect riceve solo mapStateToProps
//che è una funzione che riceve lo state (è compito
//del provider passarlo automaticamente) ed esegue il binding tra una props di nome contact, che decido io
//e che lui creerá per me, e la parte di state dello store che mi interessa.