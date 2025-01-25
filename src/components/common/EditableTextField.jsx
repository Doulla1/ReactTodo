import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * Composant EditableTextField permet de modifier et de supprimer du texte.
 *
 * @param {string} value - La valeur du texte à afficher et à modifier.
 * @param {function} onChange - Fonction de rappel pour gérer la modification du texte.
 * @param {function} onRemove - Fonction de rappel pour gérer la suppression du texte.
 * @param {boolean} isEditButtonEnable - Indicateur pour activer/désactiver le bouton d'édition.
 * @param {number} index - Index de l'élément (pour identification).
 */
const EditableTextField = ({
    value,
    onChange,
    onRemove,
    isEditButtonEnable,
    index,
}) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleBlur = () => {
        if (value) setIsEditing(false);
    };

    const handleChange = (event) => {
        if (onChange) {
            onChange(event);
        } else {
            console.error('onChange is not defined');
        }
    };

    const handleEnterKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleBlur();
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleRemove = (event) => {
        if (onRemove) {
            onRemove(event);
        } else {
            console.error('onRemove is not defined');
        }
    };

    return isEditing ? (
        <input
            type="text"
            value={value}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleEnterKeyDown}
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

EditableTextField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
    isEditButtonEnable: PropTypes.bool,
    index: PropTypes.number,
};

EditableTextField.defaultProps = {
    value: '',
    onChange: null,
    onRemove: null,
    isEditButtonEnable: true,
    index: 0,
};

export default EditableTextField;
