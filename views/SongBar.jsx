var React = require('react');
var axios = require('axios');
export default class SongBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			upvotes: 0,
			downvotes: 0

		}

	}
	//this apparently keeps getting called
	componentDidMount(){
		var that = this;
		setInterval(function(){ that.updateUpvoteDownvotes(); }, 2000);

	}

	updateUpvoteDownvotes(){
		var that = this;
		var data = {
			params:{
				songHash: that.props.hash
			}
		}
		//for some reason this is still triggering osmetimes
		if (this.props.hash != ''){
		axios.get('/updateUpvoteDownvotes', data).then(function(response){

			that.state.upvotes = response.data[0].Upvote;
			that.state.downvotes = response.data[0].Downvote;


		});
	}
	else{
		this.state.upvotes = 0;
		this.state.downvotes = 0;
	}
	}

	upvote(){
		console.log("in upvote");
		if (this.props.hash){
			console.log("posting to index!");

			var that = this;
			axios.post('/upvote', {upvoter: "USER_ID", songHash: this.props.hash}).then(function(response){
				that.updateUpvoteDownvotes();

			}).catch(function (error) {
				console.log(error);
		});

		}
	}

	downvote(){
		if (this.props.hash){
		var that = this;
		axios.post('/downvote', {upvoter: "USER_ID", songHash: this.props.hash}).then(function(response){
			that.updateUpvoteDownvotes();
		});
}
	}


	render() {
		return (
				<div className="SongBar">
				<button
				className="Like"
				onClick={this.upvote.bind(this)}>{this.state.upvotes} <span
				className="glyphicon
				glyphicon-thumbs-up"></span></button>

				<button
				className="Dislike"
				onClick={this.downvote.bind(this)}>{this.state.downvotes} <span
				className="glyphicon
				glyphicon-thumbs-down"></span></button>
				</div>
			   );
	}
}
