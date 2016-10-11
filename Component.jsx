var React = require('react');

module.exports = React.createClass({
	_handleClick: function() {
		alert("Don't Stop!");
	},
	render: function() {
		return (
			<html>
				<head>
					<title>React App</title>
					<link rel='stylesheet' href='/style.css' />
				</head>
				<body>
					<div>
						<h1>Hello World!</h1>
						<p>Isn't server side rendering remarkable?</p>
						<button onClick={this._handleClick}>Touch Me</button>
					</div>
					<script src='/bundle.js' />
				</body>
			</html>
		);
	}

});
