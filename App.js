import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux';

const DEFAULT_STATE = {user:{},contacts:[]}
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CONTACT = 'UPDATE_CONTACT';


const updateUser = newUser =>({    //updateUser restituisce una action che non è altro che un oggetto con
      type: UPDATE_USER,          //una chiave type, che indica il tipo di aggiornamento di stato da eseguire
      payload: newUser,           //e una chiave payload, che è il contenuto dell'aggiornamento di stato
})

const updateContact = newContact =>({     //come updateUser, updateContact restituisce la action per 
  type: UPDATE_CONTACT,                   //l'aggiornamento del contatto
  payload: newContact,
})

//user Reducer e contactReducer sono i due mini reducer che svolgono il compito di aggiornare lo stato
//che li compete, secondo l'azione invocata. Vengono chiamati tutte le volte che si svolge un'azione,
//secondo logica, effettuano un'aggiornamento di stato, oppure ritornano lo stato iniziale, 
//se l'azione da eseguire non prevedere nessun cambio nello stato di cui loro si occupano

const userReducer = (state = {},action) => {               
    if(action.type === UPDATE_USER) return {...state,...action.payload} //questa sintassi unisce due oggetti
    else return state;     //significa ritorna un nuovo oggetto che sia il risultato di tutto ciò che e 
//presente nel primo e nel secondo oggetto.Se sono presenti chiavi uguali, il secondo oggetto le aggiorna

}
const contactReducer = (state = [],action) =>{
    if(action.type === UPDATE_CONTACT) return [...state,action.payload]//contact è un array contenente oggetti
     else return state; //la sintassi significa appendi al primo elemento ciò che c'è nel secondo
}
//combineReducers crea il reducer principale, semplicemente si accoppia ad ogni chiave dello stato 
//il reducer che si occupa del suo aggiornamento, automaticamente il main reducer per ogni store.dispatch()
//inviera l'azione a tutti i reducers e lo chiave dello stato che devono aggiornare 
const reducer = combineReducers({ 
  user: userReducer,
  contacts:contactReducer
})
//in caso una chiave debba essere aggiornata da più reducers, una parte da un reducer e un'altra parte da
//un'altro reducer, la sintassi diventa:
/*
  const reducer = combineReducers({
    user:combineReducers({
        meta:userMetaReducer,
        login:userLoginReducer
    }),
    contacts:contactReducer
  })
*/

const store = createStore(reducer,DEFAULT_STATE); //creo lo store con redux

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}
export default function App() {
  const forceUpdate = useForceUpdate();
  
  store.dispatch(updateUser({foo:'bar'}))
  store.dispatch(updateUser({bar:'bar'}))
  store.dispatch(updateUser({foo:'baz'}))

  return (
    <View style={styles.container}>
      <Text>Name :{store.getState().contacts[0]?.name} Phone: {store.getState().contacts[0]?.phone}</Text>
      <Text>Name :{store.getState().contacts[1]?.name} Phone: {store.getState().contacts[1]?.phone}</Text>
      <Button title='Add contact' 
              onPress={()=>store.dispatch(updateContact({name:'diego',phone:'111111111'}))}/>
      <Button title='Add contact' 
              onPress={()=>store.dispatch(updateContact({name:'olga',phone:'222222222'}))}/>
      <Button title='Refresh' onPress={forceUpdate} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
