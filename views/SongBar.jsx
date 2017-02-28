var React = require('react');

export default class SongBar extends React.Component {
	render() {
		return ( 
				<div className="SongBar">  
				<button
				className="Like">0 <span
				className="glyphicon
				glyphicon-thumbs-up"></span></button>
				<button
				className="Dislike">0 <span
				className="glyphicon
				glyphicon-thumbs-down"></span></button>
				</div>
			   );
	}
}
