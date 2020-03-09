import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.onReset} className="btn btn-primary btn-sm m2">
					Reset
				</button>

				{this.props.counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						counter={counter}
					>
						<h1>Counter #{counter.id}</h1>
					</Counter>
				))}
			</div>
		);
	}
}

export default Counters;