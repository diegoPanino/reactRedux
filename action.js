//ACTION TYPES

export const ADD_USER = 'ADD_USER';
export const ADD_CONTACT = 'ADD_CONTACT';

//ACTIONS

export const addUser = (newUser) => ({
	type: ADD_USER,
	payload: newUser,
});
export const addContact = (newContact) =>({
	type: ADD_CONTACT,
	payload:newContact,
})