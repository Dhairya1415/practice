import React from 'react';
//import Radium from 'radium';
import classes from './Person.css'

const person = (props) => {
	// const style = {
	// 	'@media (min-width: 500px)': {
	// 		width: '450px'
	// 	}
	//};

	return (
		<div className={classes.Person} /*style={style}*/>
			<p onClick={props.click}>Hi I am {props.name} and I am {props.age} years old</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} value={props.name} />
		</div>
	)
};

export default person;