import React from 'react'

function Page (props: {
	params: { item: string }
}) {
	return (
		<h1>Item {props.params.item}</h1>
	)
}

export default Page
