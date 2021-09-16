import React from 'react';
import './Card.css';

const Card = (props) => {
	return (
		<div className='card'>
			<button
				className='del_btn'
				onClick={() => {
					props.onSelect(props.id);
				}}>
				✖
			</button>
			<h5 className='task'>{props.task}</h5>
		</div>
	);
};

export default Card;
