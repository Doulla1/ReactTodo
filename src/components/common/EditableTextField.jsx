import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const EditableTextField = ({ value, onChange, onRemove, isEditButtonEnable, index }) => {
    const [isEditing, setIsEditing] = useState(false);

    // Fonction pour gérer l'édition
    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Fonction pour gérer la suppression
    const handleRemove = () => {
        if (onRemove) {
            onRemove(index);
        }
    };

    return isEditing ? (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange && onChange(e.target.value, index)}
            onBlur={handleEdit}
            data-index={index}
        />
    ) : (
        <>
            <span className="editable-text-field" onClick={handleEdit}>
                {value}
            </span>
            {isEditButtonEnable && <Button label="Edit" onClick={handleEdit} />}
            <Button label="Remove" onClick={handleRemove} data-index={index} />
        </>
    );
};

// PropTypes pour valider les props du composant
EditableTextField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
    isEditButtonEnable: PropTypes.bool,
    index: PropTypes.number,
};

// Valeurs par défaut pour les props
EditableTextField.defaultProps = {
    value: '',
    onChange: null,
    onRemove: null,
    isEditButtonEnable: true,
    index: 0,
};

export default EditableTextField;