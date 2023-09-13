import React from 'react'
import PropTypes, { number, string } from 'prop-types'

function page(props: number) {
	console.log(props)
	return (
		<div>page</div>
	)
}

page.propTypes = {
	id: number.isRequired,
	test: number.isRequired
}

export default page
