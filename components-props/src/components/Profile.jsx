import React from 'react'
import Details from './Details'
import Picture from './Picture'

function Profile(props) {
	// console.log(props)
	return (
		<>
			<h1>This is the profile page:</h1>
			<Details name={props.data.name} email={props.data.email} />
			<Picture url={props.data.picture} />
		</>
	)
}

export default Profile