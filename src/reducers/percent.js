const percentReducer = (state = 1.86, action) => {
	switch(action.type){
		case 'CHANGE_PERCENT':
			return action.payload;
		default:
			return state;
	}
}
export default percentReducer;