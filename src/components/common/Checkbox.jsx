import PropTypes from 'prop-types';

// Un composant de type fonctionnel au lieu d'une classe
const Checkbox = ({ checked, onChange, ...rest }) => (
    <input type="checkbox" checked={checked} onChange={onChange} {...rest} />
);

// Définition des types des props
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

// Définition des valeurs par défaut des props
Checkbox.defaultProps = {
    checked: false, // Par défaut, la case n'est pas cochée
};

export default Checkbox;
