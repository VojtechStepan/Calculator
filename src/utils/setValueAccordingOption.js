export const setValueAccordingOption = (option, minValue, step, maxValue) => {
	switch(option){
		case 'electronics':
			return minValue;
		case 'car':
			return step;
		case 'realty':
			return maxValue;
		default:
			return minValue;
	}
};