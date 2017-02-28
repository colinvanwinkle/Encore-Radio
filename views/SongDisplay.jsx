var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var axios = require('axios');
export default class SongDisplay extends React.Component {


	constructor(props){
		super(props);
	}


	render() {
		return (
				<div className="SongDisplay">
				<img className="SongPic"
				src= {this.props.thumbnail}
				/>
				</div>
			   );
	}
}
