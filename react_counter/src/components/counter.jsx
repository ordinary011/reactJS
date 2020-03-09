import React, { Component } from 'react';

class Counter extends Component {
	state = {
		// tags: ['tag1', 'tag2', 'tag3']
	};

	// renderTags() {
	// 	if (this.state.tags.length === 0) return <p>There are no tags</p>;

	// 	return (
	// 		<ul>
	// 			{this.state.tags.map(tag => (
	// 				<li key={tag}>{tag}</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	render() {
		return (
			<div>
				{/* {this.props.children} */}
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter.id)} className="btn btn-secondary btn-sm">
					Increment
				</button>
				{/* {this.renderTags()} */}
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'm-2 badge badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Counter;
