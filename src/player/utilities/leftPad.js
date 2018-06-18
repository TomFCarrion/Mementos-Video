import React from'react';

function leftPad(num) {
	const pad = '00';
	return pad.substring(0,pad.length - num.length) + num;
}

export default leftPad;
