var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

export default class Help extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showModal: false};
	}
	close() {
		this.setState({showModal: false});
	}
	open() {

		this.setState({showModal: true})
	}
	render() {
		return(
				<div>
				<button className="Help"
				onClick={this.open.bind(this)}>
				Help	
				</button>
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
				<Modal.Header closeButton>
				<Modal.Title>Help</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<h1>FAQ’s</h1>
				<h2>How do I search a song?</h2>
				<ul>
				<li>The search bar is located on the right side of the
				page and to the right side of the queue.</li>
				<li>Type in the song you wish to search in the
				search bar and click the search button. </li>
				</ul>
				<h2>How do I add songs to the Queue?</h2>
				<ul>
				<li>Songs can be added to the queue
				after searching for them.</li>
				<li>Once you search for a song and
				the results appear, there is an add
				option next to each result that
				allows you to add the song to the
				queue.</li>
				</ul>
				<h2>How do I host a station?
				</h2>
				<ul>
				<li>Once you have signed
				in you can click onto
				the host a station
				button.</li>

				<li>If a YouTube
				playlist has not
				been linked during
				account creation,
						then the system
							shall ask the user
							to put a valid
							YouTube channel’s
							name.</li>

							<li>Once you
							have signed in
							and connected
							your YouTube
							channel you
							shall be able to
							add songs to the
							queue and host
							your station.
							</li>
							<ul/>
							<h2>How do I
							Request a
							song onto
							the
							Queue?</h2>
							<ul>
							<li>Navigate
							to
							the
							request
							tab
							to
							the
							right
							of
							the
							station
							queue.
							</li>

							<li>On
							the
							top
							of
							the
							tab
							there
							is
							a
							search
							bar,
						type
							in
							the
							song
							you
							wish
							to
							request
							and
							click
							the
							search
							button.</li>
							</ul>
							<li>Locate
							the
							song
							you
							wish
							to
							request
							among
							the
							results,
						click
							the
							add
							button
							to
							request
							it
							to
							the
							queue.
							</li>
							<ul>
							<h2>How
							do
								I
									change
									the
									volume?</h2>
									<ul>
									<li>Navigate
									to
									the
									queue,
									below
										the
										current
										song
										playing
										there
										is
										a
										volume
										button
										that
										allows
										you
										to
										select
										the
										appropriate
										volume
										button.</li>
										</ul>
										<h2>How
										do
											I
												share
												my
												Station
												to
												Twitter?</h2>
												<ul>
												<li>Navigate
												to
												the
												share
												icons
												below
												the
												queue,
												click
													on
													to
													the
													twitter
													logo</li>
													<li>Enter
													your
													login
													information
													to
													sign
													into
													twitter
													and
													share
													the
													station
													onto
													your
													twitter.
													</li>
													<ul>
													<h2>How
													do
														I
															share
															my
															Station
															to
															Facebook?</h2>
															<ul>
															<li>Navigate
															to
															the
															share
															icons
															below
															the
															queue,
															click
																on
																to
																the
																Facebook
																logo</li>
																<li>Enter
																your
																login
																information
																to
																sign
																into
																Facebook
																and
																share
																the
																station
																onto
																your
																Facebook.
																</li>
																</ul>
																<h2>How
																do
																	I
																		share
																		my
																		station
																		via
																		link?</h2>
																		<ul>
																		<li>Navigate
																		to
																		the
																		share
																		icons
																		below
																		the
																		queue,
																		click
																			the
																			link
																			button.</li>

																			<li>A
																			screen
																			with
																			a
																			shareable
																			link
																			of
																			the
																			website
																			should
																			appear,
																		copy
																			that
																			link
																			onto
																			your
																			clipboard
																			and
																			paste
																			it
																			wherever
																			you
																			wish
																			to
																			share
																			it.
																			</li>
																			</ul>
																			<h2>How
																			do
																				sign
																					up?</h2>
																					<ul>
																					<li>Navigate
																					to
																					the
																					sign
																					up
																					button.</li>

																					<li>Enter
																					your
																					username,
																					email
																						and
																						password
																						into
																						the
																						prompted
																						box.</li>

																						<li>Enter
																						a
																						valid
																						YouTube’s
																						channel’s
																						name
																						to
																						be
																						linked
																						with
																						your
																						account
																						if
																							the
																								you
																								want
																								to
																								Host
																								a
																								radio
																								station.</li>

																								<li>click
																								“Submit”
																								button,
																								and
																									let
																									the
																									system
																									verify
																									the
																									validity
																									of
																									the
																									credential.</li>
																									</ul>
																									<h2>How
																									do
																										I
																											sign
																											in?</h2>
																											<ul>
																											<li>Navigate
																											to
																											the
																											login
																											credentials</li>

																											<li>Enter
																											their
																											login
																											information
																											</li>

																											<li>Click
																											on
																											"Login"
																											button
																											</li>
																											</ul>
																											<h2>
																											How
																											do
																												I
																													logout?
																													</h2>
																													<ul>
																													<li>Navigate
																													to
																													the
																													logout
																													button,
																													it
																														is
																														located
																														on
																														the
																														top
																														right
																														corner
																														of
																														the
																														page.</li>

																														<li>Click
																														the
																														logout
																														button</li>
																														</ul>
																														<h2>
																														How
																														do
																															I
																																Upvote
																																and
																																Downvote
																																songs?</h2>
																																<ul>
																																<li>Navigate
																																to
																																the
																																queue
																																on
																																the
																																station
																																page</li>
																																<li>The
																																center
																																of
																																the
																																queue
																																will
																																have
																																the
																																current
																																song
																																that
																																is
																																playing,
																																to
																																	the
																																	left
																																	is
																																	previous
																																	songs
																																	and
																																	to
																																	the
																																	right
																																	is
																																	upcoming
																																	songs.
																																	Beneath
																																	each
																																	song
																																	car
																																	there
																																	is
																																	a
																																	upvote
																																	and
																																	downvote
																																	icon.
																																	</li>

																																	<li>Click
																																	onto
																																	the
																																	respective
																																	icon,
																																if
																																	you
																																		click
																																		the
																																		button
																																		again
																																		it
																																		will
																																		undo
																																		your
																																		upvote/downvote.
																																		</li>
																																		</ul>
																																		<h2>How
																																		do
																																			I
																																				delete
																																				My
																																				Account?</h2>

																																				<h2>How
																																				do
																																					I
																																						change
																																						Account
																																						settings.
																																						</h2>
																																						</Modal.Body>
																																						</Modal>
																																						</div>
																																						);
	}
}
