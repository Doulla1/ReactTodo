import PropTypes from 'prop-types';

const Button = ({ onClick, label, className, ...rest }) => (
	<button onClick={onClick} className={`btn btn-primary ${className}`} {...rest}>
		{label}
	</button>
);

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	className: PropTypes.string, // Optional CSS class
};

Button.defaultProps = {
	className: '', // No specific class by default
};

export default Button;
