var React = require('react');
import QueuedSong from './QueuedSong.jsx';
import QueuedSongMain from './QueuedSongMain.jsx';

/**
 * Queue component located inside the body component, and currently consists of
 * 5 song components
 * #TODO Alter styling
 */
export default class Queue extends React.Component {
	render() {
		return ( 
				<div className="col-md-6 col-md-offset-1"
				id="Queue">

				<div className="QueueRow">

				<QueuedSong
				/>
				<QueuedSong
				/>
				<QueuedSongMain
				/>
				<QueuedSong
				/>
				<QueuedSong
				/>

				</div>
				</div>
			   );
	}
}

