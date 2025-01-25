import PropTypes from 'prop-types';

const Button = ({ onClick, label, className, ...rest }) => (
    <button onClick={onClick} className={className} {...rest}>
        {label}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string, // Classe CSS optionnelle
};

Button.defaultProps = {
    className: '', // Par défaut, aucune classe spécifique
};

export default Button;
