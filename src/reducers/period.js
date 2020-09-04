const periodReducer = (state = 24, action) => {
	switch(action.type){
		case 'CHANGE_PERIOD':
			return action.payload;
		default:
			return state;
	}
}
export default periodReducer;