const amountReducer = (state = 1000000, action) => {
	switch(action.type){
		case 'CHANGE_AMOUNT':
			return action.payload;
		default:
			return state;
	}
}
export default amountReducer;