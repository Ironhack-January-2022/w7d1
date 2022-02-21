import React from 'react'

export default function Details(props) {
	console.log(props)
	return (
		<>
			<h3>These are the user details</h3>
			<h5>Name: {props.name}</h5>
			<h5>Email: {props.email}</h5>
		</>
	)
}
