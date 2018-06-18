import React from 'react';
import FormattedTime from '../utilities/formattedtime';

const Timer = (props) => (
	<FormattedTime
		secs={ props.currentTime }
	/>
)

export default Timer;
