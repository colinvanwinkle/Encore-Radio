var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

export default class QueueResult extends React.Component {
	render() {
		return (
				<div style={{backgroundColor: this.props.backgroundColor}}
				className="row SearchResult">
				<img className="ResultPic" src={this.props.url}/>
				<p className="ResultTitle">{this.props.title}</p>
				</div>
			   );
	}
}
