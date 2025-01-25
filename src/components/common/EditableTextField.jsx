import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// Composant EditableTextField : permet d'afficher un champ texte qui peut être modifié ou supprimé.
class EditableTextField extends Component {
    constructor(props) {
        super(props);

        // Initialisation de l'état local
        this.state = {
            isEditing: false,
            value: props.value,
        };

        // Liaison explicite des méthodes au contexte de la classe
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this);
    }

    // Gère la sortie du mode édition lorsque l'utilisateur clique en dehors du champ
    handleBlur() {
        const { value } = this.props;
        if (value) this.setState({ isEditing: false });
    }

    // Gère le changement de valeur dans le champ texte
    handleChange(event) {
        const { onChange } = this.props;

        if (onChange) {
            onChange(event);
        } else {
            console.error('onChange is not defined');
        }
    }

    // Gère l'appui sur la touche "Entrée" pour quitter le mode édition
    handleEnterKeyDown(event) {
        if (event.key === 'Enter') {
            this.handleBlur();
        }
    }

    // Passe en mode édition lorsqu'on clique sur le texte ou le bouton d'édition
    handleEdit() {
        this.setState({ isEditing: true });
    }

    // Gère la suppression du champ (ou d'un élément lié)
    handleRemove(event) {
        const { onRemove } = this.props;
        if (onRemove) {
            onRemove(event);
        } else {
            console.error('onRemove is not defined');
        }
    }

    // Méthode render : contrôle ce qui est affiché
    render() {
        const { isEditing } = this.state;
        const { value, isEditButtonEnable, index } = this.props;

        // Si on est en mode édition, afficher un champ texte
        if (isEditing) {
            return (
                <input
                    type="text"
                    value={value}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnterKeyDown}
                    data-index={index}
                />
            );
        }

        // Sinon, afficher le texte et les boutons associés
        return (
            <>
                <span className="editable-text-field" onClick={this.handleEdit}>
                    {value}
                </span>

                {isEditButtonEnable && (
                    <Button label="Edit" onClick={this.handleEdit} />
                )}
                {/* Affiche un bouton "Remove" pour supprimer l'élément */}
                <Button
                    label="Remove"
                    onClick={this.handleRemove}
                    data-index={index} // Ajoute un index pour une éventuelle identification
                />
            </>
        );
    }
}

EditableTextField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    isEditButtonEnable: PropTypes.bool,
    index: PropTypes.number,
};

EditableTextField.defaultProps = {
    isEditButtonEnable: true,
    index: 0,
};

export default EditableTextField;
