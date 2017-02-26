var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

export default class SongDisplay extends React.Component {
	render() {
		return ( 
				<div className="SongDisplay">
				<img className="SongPic"
				src="http://images.genius.com/b17a54d05a3de269cc6ea53c3f71f73e.1000x1000x1.jpg"
				/>
				</div>
			   );
	}
}
