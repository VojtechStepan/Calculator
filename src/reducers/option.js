const percentReducer = (state = '', action) => {
	switch(action.type){
		case 'CHANGE_USER_OPTION':
			return action.payload;
		default:
			return state;
	}
}
export default percentReducer;