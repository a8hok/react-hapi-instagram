'use strict';
import React from 'react';

class Insta extends React.Component {
	constructor() {
		super();
		this.state = { userMediaCollections : [] };
	}
	componentWillMount() {
		let URL = 'http://localhost:3000/login/a_s_h_ok';
		fetch(URL)
		.then( (response) => { return response.json()})
		.then( (result)  => this.setState({ userMediaCollections : result.data }));
		
	}
	render() {
		let mediaCollections = this.state.userMediaCollections;
		return(

			<div className="container">
			        { mediaCollections.map((media, key) => {
							return (
								<center key={media.created_time}>
									<img 
										src={media.images.standard_resolution.url} />
								</center>)
			        })}
			</div>
		)
	}
}

export default Insta;
