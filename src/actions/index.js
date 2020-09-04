export const changeAmnout = (newValue) => {
	return {
		type: 'CHANGE_AMOUNT',
		payload: newValue,
	}
};

export const changePeriod = (newValue) => {
	return {
		type: 'CHANGE_PERIOD',
		payload: newValue,
	}
};

export const changePercent = (newValue) => {
	return {
		type: 'CHANGE_PERCENT',
		payload: newValue,
	}
};

export const changeUserOption = (newValue) => {
	return {
		type: 'CHANGE_USER_OPTION',
		payload: newValue,
	}
};