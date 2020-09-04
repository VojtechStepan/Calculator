export const setValueAccordingOption = (option, one, two, three) => {
	switch(option){
		case 'electronics':
			return one;
		case 'car':
			return two;
		case 'realty':
			return three;
		default:
			return one;
	}
};