import React from'react';
import leftPad from'./leftPad';
import'../components/timer.css'

function formattedTime(props) {
	const minutes = parseInt(props.secs/60, 10);
	const seconds = parseInt(props.secs%60, 10);
	// console.log('Min: '+minutes, 'Recibe: '+props.secs, 'Seg: '+seconds);
	return(
		<div className="Timer">
			<p>
				<span>{leftPad(minutes.toString())}:{leftPad(seconds.toString())}</span>
			</p>
		</div>
	)
}

export default formattedTime;
