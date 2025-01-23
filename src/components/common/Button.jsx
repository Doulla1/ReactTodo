import { Component } from 'react';

class Button extends Component {
	render() {
		const { onClick, label } = this.props;

		return (
			<button onClick={onClick} {...this.props}>
				{label}
			</button>
		);
	}
}

export default Button;
