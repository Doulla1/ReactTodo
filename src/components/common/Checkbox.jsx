import PropTypes from 'prop-types';

const Checkbox = ({ checked, onChange, ...rest }) => (
    <div className="form-check">
        <input
            type="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={onChange}
            {...rest}
        />
        <label className="form-check-label">{rest.label}</label>
    </div>
);

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string, // Adding label prop type
};

Checkbox.defaultProps = {
    checked: false,
    label: '', // Default label is an empty string
};

export default Checkbox;
